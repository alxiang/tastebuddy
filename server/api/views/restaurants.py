# Scan QR code, get rest
import json
from uuid import UUID, uuid4

from api.models import Food, Menu, Restaurant, User
from django.forms.models import model_to_dict
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


def QR_rest(request):
    pass


# Restaurant ID in request
@api_view(["GET"])
def get_restaurant(request, id):
    data = {}
    restaurant_data = Restaurant.objects.get(id=id)
    if restaurant_data:
        data = model_to_dict(
            restaurant_data,
            fields=["created", "name", "description", "tags", "address", "rating"],
        )
    return JsonResponse(data)


# Restaurant ID in request
@api_view(["GET"])
def get_menus_for_restaurant(request, id):
    data = {
        "0": []
    }
    menus = list(Menu.objects.all().filter(restaurant_id=id))
    if menus:
        for menu in menus:
            data["0"].append(
                model_to_dict(
                    menu,
                    fields=["id", "created", "restaurant_id", "menu_type"],
                )
            )
    return JsonResponse(data)

