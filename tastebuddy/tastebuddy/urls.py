"""tastebuddy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.contrib import admin
from django.urls import include, path, re_path
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from api import views


@api_view(['GET'])
def ping(request): 
    if request.method == 'GET':
        return Response({"detail": "pong"}, status = status.HTTP_200_OK) 


urlpatterns = [
    path('ping/', ping),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]
