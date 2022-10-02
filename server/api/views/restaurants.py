# Scan QR code, get rest
from api.models import Menu, Restaurant
from django.forms.models import model_to_dict
from django.http import JsonResponse
from rest_framework.decorators import api_view


# Restaurant ID in request
@api_view(["GET"])
def get_restaurant(request, restaurant_id):
    data = {}
    restaurant_data = Restaurant.objects.get(id=restaurant_id)
    if restaurant_data:
        data = model_to_dict(
            restaurant_data,
            fields=["created", "name", "description", "tags", "address", "rating"],
        )
    return JsonResponse(data)


# Restaurant ID in request
@api_view(["GET"])
def get_menus_for_restaurant(request, restaurant_id):
    data = {"0": []}
    menus = list(Menu.objects.all().filter(restaurant_id=restaurant_id))
    if menus:
        for menu in menus:
            data["0"].append(
                model_to_dict(
                    menu,
                    fields=["id", "created", "restaurant_id", "menu_type"],
                )
            )
    return JsonResponse(data)
