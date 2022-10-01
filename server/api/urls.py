from django.urls import path 
from . import views


urlpatterns = [
    path('ping/', views.ping),
    path('pre_populate/', views.pre_populate)
]
