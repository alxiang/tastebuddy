from uuid import UUID

from api.models import Food, FoodOrder, UserOrder
from django.http import JsonResponse
from ml.TasteEngine import TasteEngine
from rest_framework.decorators import api_view

taste_engine = TasteEngine()


def check_order_history(request):
    pass


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
        food_order = FoodOrder.objects.get(user_order_id=user_order.id)
        food = Food.objects.get(id=food_order.food_id)
        user_food_history.append((food.name, food.ingredients, food_order.rating))

    taste_profile = taste_engine.compute_taste_profile_for_user(user_food_history)
    return JsonResponse(taste_profile)
