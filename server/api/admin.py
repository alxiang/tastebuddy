from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register([Restaurant, Menu, Order, Food, User, FoodOrder, UserOrder])