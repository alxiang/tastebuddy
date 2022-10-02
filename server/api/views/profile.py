from uuid import UUID

from api.models import Food, FoodOrder, UserOrder
from django.http import JsonResponse
from ml.TasteEngine import TasteEngine
from rest_framework.decorators import api_view

taste_engine = TasteEngine()

@api_view(["GET"])
def check_order_history(request):
    uuid = UUID(request.GET.get("user_id", 0))
    # status = request.GET.get("closed")

    # shows each user order and the foodorders in each user order
    user_orders = UserOrder.objects.get(id=uuid)
    if len(user_orders) == 0:
        return JsonResponse()

    user_order_history = {}

    for user_order in user_orders: 

        user_order_history[user_order.uuid] = {
            "created": user_order.created,
            "reviews": user_order.reviews,
            "foods": {}
        }
        food_orders = FoodOrder.objects.get(user_order_id=user_order.id)
        for food_order in food_orders:
            food = Food.objects.get(id=food_order.food_id)

            user_order_history[user_order.uuid]["foods"][food.id] = {
                "name": food.name,
                "description": food.description,
                "ingredients": food.ingredients,
                "price": food.price,
                "special_notes": food.special_notes,
                "special_request": food_order.special_request,
                "rating": food_order.rating
            }
    
    return JsonResponse(user_order_history)


@api_view(["GET"])
def get_taste_profile(request):
    uuid = UUID(request.GET.get("user_id", 0))

    # each user order corresponds to one time the user ordered
    # at the restaurannt
    user_orders = UserOrder.objects.get(id=uuid)
    if len(user_orders) == 0:
        return None

    user_food_history = []

    for user_order in user_orders:
        food_orders = FoodOrder.objects.get(user_order_id=user_order.id)
        for food_order in food_orders:
            food = Food.objects.get(id=food_order.food_id)
            user_food_history.append((food.name, food.ingredients, food_order.rating))

    taste_profile = taste_engine.compute_taste_profile_for_user(user_food_history)
    return JsonResponse(taste_profile)
