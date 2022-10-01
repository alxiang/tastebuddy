#Scan QR code, get rest
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

#Restaurant ID in request
@api_view(['GET'])
def get_restaurant(request): 
    data = {}
    uuid = UUID(request.GET.get('restaurant_id',0))
    # print("UUID: " + str(uuid)) 
    restaurant_data = Restaurant.objects.get(id = uuid)
    if restaurant_data:
        data = model_to_dict(restaurant_data,fields = ['created','name','description','tags','address','rating'])
    return JsonResponse(data) 
    
 

#Restaurant ID in request
def get_menus_for_restaurant(request): 
    pass
