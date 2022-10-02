from rest_framework import serializers
from api.models import *

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'created', 'name', 'description', 'tags', 'address', 'ratings']

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'created', 'restaurant_id', 'menu_type']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'created', 'time', 'status', 'price','restaurant_id']

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['id', 'created', 'name', 'description', 'ingredients', 'price', 'special_notes', 'section', 'menu_id']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'created', 'name', 'email', 'profile']

class FoodOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodOrder
        fields = ['id', 'created', 'food_id', 'special_request', 'rating']

class UserOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserOrder
        fields = ['id', 'created', 'user_id', 'order_id','reviews']
