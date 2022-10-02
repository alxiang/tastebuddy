
import json
from uuid import UUID, uuid4

from api.models import Food, Menu, Restaurant, User
from django.forms.models import model_to_dict
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['PATCH'])
def post_ratings(request): 
    body_unicode = request.body.decode('utf-8') 
    body = json.loads(body_unicode)
    try: 
        user_order = UserOrder.objects.get(user_id = body['user_id'], order_id = body['order_id'])
        for food_id, rating in body['ratings'].items():
            food_order = FoodOrder.objects.get(user_order_id = user_order.id, food_id = food_id) 
            food_order.rating = rating 
            food_order.save() 
        return Response({}, status = status.HTTP_200_OK)
    except: 
        return Response({}, status = status.HTTP_400_BAD_REQUEST) 

@api_view(['PATCH'])
def post_reviews(request): 
    body_unicode = request.body.decode('utf-8') 
    body = json.loads(body_unicode)
    try: 
        user_order = UserOrder.objects.get(user_id = body['user_id'], order_id = body['order_id']) 
        user_order.reviews = body['reviews']
        order = Order.objects.get(order_id = body['order_id']) 
        order.status = "done" 
        order.save() 
        user_order.save() 
        return Response({}, status = status.HTTP_200_OK)
    except: 
        return Response({}, status = status.HTTP_400_BAD_REQUEST)
