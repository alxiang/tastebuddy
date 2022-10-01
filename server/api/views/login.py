import json
from uuid import UUID, uuid4

from api.models import Food, Menu, Restaurant, User
from django.forms.models import model_to_dict
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


#Verify against 
@api_view(['POST'])
def login(request):
    # uuid = UUID(request.GET.get('user_id',0))
    body_unicode = request.body.decode('utf-8') 
    body = json.loads(body_unicode) 
    try: 
        user_data = User.objects.get(email = body['email'])
    except: 
        return Response({"message", "email not found"}, status = status.HTTP_404_NOT_FOUND)
    if body['password'] != '123': 
        return Response({"message", "incorrect password"}, status = status.HTTP_404_NOT_FOUND)
    

    if body['password'] == '123': 
        user_data = User.objects.get(email = body['email'])
    data = {}
    if user_data: 
        data = model_to_dict(user_data,fields = ['created','name','email','profile'])
        return JsonResponse(data) 
        return Response({"Nothing": "Found"}, status = status.HTTP_400_BAD_REQUEST) 

@api_view(['GET'])
def signup(request):
    try: 
        new_user = User(
            name = request.GET.get('name', ''), 
            email = request.GET.get('email', ''), 
            profile = request.GET.get('profile', {}), 
        )
        new_user.save() 
        return Response({}, status = status.HTTP_201_CREATED) 
    except: 
        return Response({"Nothing": "Found"}, status = status.HTTP_400_BAD_REQUEST) 
