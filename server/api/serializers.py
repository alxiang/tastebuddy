from rest_framework import serializers
from server.api.models import *

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'created', 'name', 'description', 'tags', 'address', 'ratings']

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'created', 'time', 'status', 'price']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'created', 'time', 'status', 'price']

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['id', 'created', 'name', 'description', 'ingredients', 'price', 'special_notes', 'restaurant_id', 'section', 'menu_id', 'order_id']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'created', 'name', 'email', 'profile']

class FoodOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodOrder
        fields = ['id', 'created', 'food_id', 'special_request']

class UserOrderSerializer(serializers.ModelSerializer):
    class meta:
        model = UserOrder
        fields = ['id', 'created', 'restaurant_id', 'user_id', 'order_id', 'rating', 'reviews']
