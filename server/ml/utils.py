from api.models import FoodOrder, UserOrder


def retrieve_user_food_history(user_id):
    user_orders = list(UserOrder.objects.all().filter(user_id=user_id))
    user_food_history = []
    
    if len(user_orders) == 0:
        return user_food_history

    for user_order in user_orders:
        food_orders = list(FoodOrder.objects.all().filter(user_order_id=user_order.id))
        for food_order in food_orders:
            food = food_order.food_id
            user_food_history.append((food.name, ", ".join(food.ingredients), food_order.rating))

    return user_food_history
