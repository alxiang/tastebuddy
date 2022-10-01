from django.contrib import admin
from .models import Restaurant, Menu, Order, Food, User, Food_Order, User_Order

# Register your models here.
admin.site.register([Restaurant, Menu, Order, Food, User, Food_Order, User_Order])