from django.urls import path 
from . import views


urlpatterns = [
    path('ping/', views.ping),
    path('pre_populate/', views.pre_populate),
    path('login/', views.login), 
    path('signup/', views.signup),
    path('restaurant/<str>:id',views.get_restaurant),
    path('menus/',views.get_menus_for_restaurant),
    path('foods/',views.get_foods_for_menu),
]
