import json
from uuid import UUID, uuid4

from api.models import Food, Menu, Restaurant, User
from django.forms.models import model_to_dict
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


#Menu ID in request
def get_foods_for_menu(request): 
    pass 

#Post cart
def order(request): 
    pass 
