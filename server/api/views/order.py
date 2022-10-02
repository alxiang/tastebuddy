import json

from api.models import Food, FoodOrder, Order, UserOrder
from api.serializers import OrderSerializer
from django.forms.models import model_to_dict
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from server.api.serializers import FoodSerializer


# Menu ID in request
@api_view(["GET"])
def get_foods_for_menu(request, menu_id):
    data = {"0": []}
    foods = list(Food.objects.all().filter(menu_id=menu_id))
    if foods:
        for food in foods:
            serializer = FoodSerializer(food)
            data["0"].append(serializer.data)
    return JsonResponse(data)


# Post cart
@api_view(["POST"])
def post_order(request):
    body_unicode = request.body.decode("utf-8")
    body = json.loads(body_unicode)

    user_id = body["user_id"]
    restaurant_id = body["restaurant_id"]
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
        restaurant_id=restaurant_id,
    )
    new_order.save() 

    # Create the user orders for the user (second level)
    user_order = UserOrder(
        user_id=user_id,
        order_id=new_order.id,
        reviews=""
    )
    user_order.save()

    # Create a food order for each food ordered
    for food_id, special_request in food_id_to_special_request.items():
        food = Food.objects.get(id=food_id)
        food_order = FoodOrder(
            user_order_id=user_order.id,
            food_id=food_id,
            special_request=special_request
        )
        food_order.save()

    serializer = OrderSerializer(new_order)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
        