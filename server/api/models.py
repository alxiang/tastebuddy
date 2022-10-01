import uuid 
from django.db import models 
from django.contrib.postgres.fields import ArrayField

##
# created and managed by restaurant
##
class Restaurant(models.Model): 
    id = models.UUIDField(primary_key = True, default = uuid.uuid4) 
    created = models.DateTimeField(auto_now_add = True) 
    name = models.TextField() 
    description = models.TextField() 
    tags = ArrayField(models.TextField()) 
    address = models.TextField() 
    rating = models.IntegerField() 

class Menu(models.Model): 
    id = models.UUIDField(primary_key = True, default = uuid.uuid4)
    created = models.DateTimeField(auto_now_add = True) 
    restaurant_id = models.ForeignKey(Restaurant, on_delete = models.CASCADE,blank = True, null = True)
    menu_type = models.TextField()

class Food(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4)
    created = models.DateTimeField(auto_now_add = True) 
    name = models.TextField()
    description = models.TextField()
    ingredients = ArrayField(models.TextField()) 
    price = models.IntegerField() 
    special_notes = ArrayField(models.TextField()) 
    section = models.TextField()
    menu_id = models.ForeignKey(Menu, on_delete = models.CASCADE) 

##
# static: created on login 
##

class User(models.Model): 
    id = models.UUIDField(primary_key = True, default = uuid.uuid4) 
    created = models.DateTimeField(auto_now_add = True) 
    name = models.TextField() 
    email = models.TextField() 
    profile = models.JSONField(blank = True, default = dict) 


##
#  created and updated while user is using the app
##

class Order(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4)
    created = models.DateTimeField(auto_now_add = True) 
    time = models.IntegerField()
    status = models.TextField()
    price = models.IntegerField()
    restaurant_id = models.ForeignKey(Restaurant, on_delete = models.CASCADE, blank = True, null = True) 

#Order History 
class UserOrder(models.Model): 
    id = models.UUIDField(primary_key = True, default = uuid.uuid4)    
    created = models.DateTimeField(auto_now_add = True) 
    user_id =  models.ForeignKey(User, on_delete = models.CASCADE) 
    order_id = models.ForeignKey(Order, on_delete = models.CASCADE)
    reviews = models.TextField() 

class FoodOrder(models.Model): 
    id = models.UUIDField(primary_key = True, default = uuid.uuid4)
    created = models.DateTimeField(auto_now_add = True) 
    user_order_id = models.ForeignKey(UserOrder, on_delete = models.CASCADE,blank = True, null = True)
    food_id = models.ForeignKey(Food, on_delete = models.CASCADE)
    special_request = models.TextField()
    rating = models.IntegerField(default = 0) 


















