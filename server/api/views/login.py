import json
from uuid import UUID, uuid4

from api.models import Food, Menu, Restaurant, User
from django.forms.models import model_to_dict
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.serializers import UserSerializer


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
    if user_data:
        serializer = UserSerializer(user_data)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
@api_view(['POST'])
def signup(request):
    body_unicode = request.body.decode('utf-8') 
    body = json.loads(body_unicode)

    try: 
        new_user = User(
            name = body['name'], 
            email = body['email'], 
            profile = {}, 
        )
        new_user.save() 
        return Response(UserSerializer(new_user).data, status = status.HTTP_201_CREATED) 
    except: 
        return Response({}, status = status.HTTP_400_BAD_REQUEST) 
