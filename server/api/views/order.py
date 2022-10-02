import json

from api.models import Food, FoodOrder, Order, Restaurant, User, UserOrder
from api.serializers import FoodSerializer, OrderSerializer
from django.http import JsonResponse
from ml.TasteEngine import TasteEngine
from ml.utils import retrieve_user_food_history
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

taste_engine = TasteEngine()

# Menu ID in request
@api_view(["GET"])
def get_foods_for_menu(request, menu_id, user_id):
    data = {"0": []}
    foods = list(Food.objects.all().filter(menu_id=menu_id))

    if foods:
        scores_per_food = {}
        for food in foods:
            scores_per_food[food.name] = taste_engine.compute_score_for_food(
                retrieve_user_food_history(user_id), 
                (food.name, food.ingredients)
            )
        # Normalize the scores to [0, 1]
        max_score = max(scores_per_food.values())
        if max_score != 0:
            scores_per_food = {k: v/max_score for k, v in scores_per_food.items()}

        for food in foods:
            serializer = FoodSerializer(food)
            food_data = serializer.data
            
            # inject score per menu item
            food_data["affinity"] = scores_per_food[food.name]

            data["0"].append(food_data)

    return JsonResponse(data)


# Post cart
@api_view(["POST"])
def post_order(request):
    body_unicode = request.body.decode("utf-8")
    body = json.loads(body_unicode)

    user_id = body["user_id"]
    user = User.objects.get(id = user_id) 
    restaurant_id = body["restaurant_id"]
    restaurant = Restaurant.objects.get(id = restaurant_id)
    food_id_to_special_request = body["food_id_to_special_request"]

    total_price = 0
    for food_id in food_id_to_special_request:
        food = Food.objects.get(id=food_id)
        total_price += food.price


    # Create the Order (highest level of hierarchy)
    new_order = Order(
        time=0,
        status="created",
        price=total_price,
        restaurant_id=restaurant,
    )
    new_order.save() 

    # Create the user orders for the user (second level)
    user_order = UserOrder(
        user_id=user,
        order_id=new_order,
        reviews=""
    )
    user_order.save()

    # Create a food order for each food ordered
    for food_id, special_request in food_id_to_special_request.items():
        food = Food.objects.get(id=food_id)
        food_order = FoodOrder(
            user_order_id=user_order,
            food_id=food,
            special_request=special_request
        )
        food_order.save()

    serializer = OrderSerializer(new_order)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
        