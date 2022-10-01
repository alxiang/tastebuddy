from django.shortcuts import render
from django.http import JsonResponse 
from django.forms.models import model_to_dict
from rest_framework import status
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from api.models import Food, Restaurant, Menu, User
from uuid import uuid4, UUID


import json

FOODS = [
    {
        "name": "Grilled Calamari",
        "ingredients": ["crispy fried tentacles", "jalapeños", "cilantro", "whipped avocado"],
        "price": 15,
        "section": "Snacks & Shares"
    },
    {
        "name": "Crispy Calamari",
        "ingredients": ["honey sambal dipping sauce"],
        "price": 15,
        "section": "Snacks & Shares"
    },
    {
        "name": "Charred Octopus",
        "ingredients": ["roasted garlic white bean puree", "piquillo peppers", "cherry tomatoes", "avocado"],
        "price": 19,
        "section": "Snacks & Shares"
    },
    {
        "name": "Short Rib Mac & Cheese",
        "ingredients": ["slope farms all-natural grass fed braised short ribs", "cavatelli", "cabot white cheddar", "toasted bread crumbs"],
        "price": 15,
        "section": "Snacks & Shares"
    },
    {
        "name": "Pilsner Steamed Mussels",
        "ingredients": "pilsner, tomatoes, pancetta, garlic, scallions, parmesan",
        "price": 14,
        "section": "Snacks & Shares"
    },
    {
        "name": "House-Made Meatballs",
        "ingredients": "all-natural grass fed beef, basil, oregano, fresh tomato sauce, parmesan cheese crostini",
        "price": 14,
        "section": "Snacks & Shares"
    },
    {
        "name": "Shrimp & Grits",
        "ingredients": "grilled shrimp, parmesan, polenta, spicy pesto",
        "price": 19,
        "section": "Snacks & Shares"
    },
    {
        "name": "Jumbo Lump Crab Cake",
        "ingredients": "avocado puree, marinated tomatoes, lettuce",
        "price": 19,
        "section": "Snacks & Shares"
    },
    {
        "name": "Lamb Lollipops",
        "ingredients": "arugula salad, mint yogurt, harissa sauce",
        "price": 23,
        "section": "Snacks & Shares"
    },
    {
        "name": "Harvest Sliders",
        "ingredients": "slope farms all natural grass fed beef, brioche bun, tomato aioli, fries",
        "price": 17,
        "section": "Snacks & Shares"
    },
    {
        "name": "Crispy Artichokes",
        "ingredients": "lemon aioli, jalapeños, cilantro, red onions, ricotta salata cheese",
        "price": 14,
        "section": "Snacks & Shares"
    },
    {
        "name": "Roasted Mushrooms",
        "ingredients": "spinach, soft poached egg, crispy polenta cake, parmesan                ",
        "price": 13,
        "section": "Snacks & Shares"
    },
    {
        "name": "Beet & Goat Cheese Croquettes",
        "ingredients": "beet cream sauce, baby arugula, beet almond chimichurri",
        "price": 14,
        "section": "Starter"
    },
    {
        "name": "Spicy Salmon Tartare",
        "ingredients": "jalapeño, lemon zest, baby arugula, house made chips",
        "price": 13,
        "section": "Starter"
    },
    {
        "name": "Steak Tartar",
        "ingredients": "all-natural grass fed beef, truffle, parmesan, quail egg, grilled bread",
        "price": 15,
        "section": "Starter"
    },
    {
        "name": "Lobster Bisque",
        "ingredients": "black truffle, melted leeks, lobster chunk",
        "price": 10,
        "section": "Starter"
    },
    {
        "name": "Shaved Brussels Sprout Salad",
        "ingredients": "parmesan risotto cake, truffle vinaigrette",
        "price": 13,
        "section": "Starter"
    },
    {
        "name": "Salad Of Organic Mixed Greens",
        "ingredients": "balsamic vinaigrette, cherry tomatoes, goat cheese",
        "price": 10,
        "section": "Starter"
    },
    {
        "name": "Chopped Salad",
        "ingredients": "romaine, radiccio, radish, cucumbers, black olives, citrus creamy dressing",
        "price": 12,
        "section": "Starter"
    },
    {
        "name": "Bibb Salad",
        "ingredients": "dried fruit, shaved red onion, spiced walnuts, maytag blue cheese, balsamic dressing",
        "price": 12,
        "section": "Starter"
    },
    {
        "name": "Caesar Salad",
        "ingredients": "romaine hearts, white anchovies, croutons, shaved parmesan",
        "price": 11,
        "section": "Starter"
    },
    {
        "name": "Pear & Arugula Salad",
        "ingredients": "endive, spiced pecans, manchego, raspberry vinaigrette",
        "price": 11,
        "section": "Starter"
    },
    {
        "name": "Ricotta Gnocchi",
        "ingredients": "slope farms, all-natural grass fed classic beef bolognese, aged pecorino",
        "price": 23,
        "section": "Seconds"
    },
    {
        "name": "Butternut Squash Ravioli",
        "ingredients": "thyme brown butter sauce, parmesan cheese",
        "price": 21,
        "section": "Seconds"
    },
    {
        "name": "Eggplant Cavatelli",
        "ingredients": "roasted eggplant, rustic tomatoes, white wine, marinara sauce, fresh mozzarella, basil",
        "price": 21,
        "section": "Seconds"
    },
    {
        "name": "Linguini Alle Vongole",
        "ingredients": "pancetta, clams, hot cherry peppers, garlix, parsley",
        "price": 24,
        "section": "Seconds"
    },
    {
        "name": "Chicken & Wild Mushroom Pappardelle",
        "ingredients": "roasted organic chicken, fresh herbs, truffle oil, parmesan cheese",
        "price": 23,
        "section": "Seconds"
    },
    {
        "name": "Sausage Tagliatelle",
        "ingredients": "house made fennel sausage, broccoli rabe, garlic, basil pesto, chili flakes, parmesan cheese",
        "price": 23,
        "section": "Seconds"
    },
    {
        "name": "Seafood Pappardelle",
        "ingredients": "lobster, shrimp, scallops, peas, rustic tomatoes, brandy-lobster sauce",
        "price": 30,
        "section": "Seconds"
    },
    {
        "name": "Lamb & Wild Mushroom Linguini                                                                                      ",
        "ingredients": "braised lamb, fava beans, asparagus tips, parmesan, braising sauce",
        "price": 25,
        "section": "Seconds"
    },
    {
        "name": "Shrimp Amalfi",
        "ingredients": "fresh shrimp sautéed with shaved garlic, fresh tomatoes, mashed potatoes, asparagus",
        "price": 30,
        "section": "Seconds"
    },
    {
        "name": "Seafood Pan Roast",
        "ingredients": "shrimp, littleneck clams, mussels, lobster, scallop, white wine, tomato, herb basmati",
        "price": 32,
        "section": "Seconds"
    },
    {
        "name": "Seared Sea Scallops",
        "ingredients": "lobster, scallion mash, haricot verts, citrus, almonds",
        "price": 34,
        "section": "Seconds"
    },
    {
        "name": "Rare Seared Yellowfin Tuna",
        "ingredients": "braised lentils, artichokes, artichoke guacamole",
        "price": 30,
        "section": "Seconds"
    },
    {
        "name": "Grilled Organic Salmon",
        "ingredients": "roasted potatoes, baby carrots, roasted baby beet vinaigrette",
        "price": 29,
        "section": "Seconds"
    },
    {
        "name": "Grilled Rainbow Trout",
        "ingredients": "riesling poached golden raisin, cauliflower couscous, carrot harissa melted leeks, asparagus, lemon butter sauce",
        "price": 29,
        "section": "Seconds"
    },
    {
        "name": "Pan Seared Duck Breast",
        "ingredients": "butternut squash puree, brussels sprouts, blueberry sauce",
        "price": 32,
        "section": "Seconds"
    },
    {
        "name": "Roasted Rack Of Lamb",
        "ingredients": "risotto style grains, butternut squash, asparagus, rosemary sauce",
        "price": 41,
        "section": "Seconds"
    },
    {
        "name": "Roasted All Natural Half Chicken Scarpariello",
        "ingredients": "dirty rice, garlic spinach, chorizo, cherry peppers, roasted piquillo peppers",
        "price": 28,
        "section": "Seconds"
    },
    {
        "name": "Harvest Burger",
        "ingredients": "slope farms all-natural grass feed beef, bacon, crispy onions, tomato mayo, grafton cheddar, everything spice fries",
        "price": 24,
        "section": "Seconds"
    },
    {
        "name": "Filet Mignon",
        "ingredients": "truffle mashed potatoes, brussel sprouts, fig port demi",
        "price": 40,
        "section": "Seconds"
    },
    {
        "name": "Hanger Steak",
        "ingredients": "mashed potatoes, garlic spinach, chimichurri",
        "price": 31,
        "section": "Seconds"
    },
    {
        "name": "Grilled NY Strip Steak",
        "ingredients": "truffle french fries, grilled asparagus, green peppercorn sauce",
        "price": 36,
        "section": "Seconds"
    },
    {
        "name": "Grilled Asparagus",
        "price": 6,
        "section": "Sides"
    },
    {
        "name": "Mashed Potatoes",
        "price": 4,
        "section": "Sides"
    },
    {
        "name": "Everything Spice Fries",
        "price": 5,
        "section": "Sides"
    },
    {
        "name": "Sautéed Spinach & Garlic",
        "price": 5,
        "section": "Sides"
    },
    {
        "name": "House-Made Potato Chips",
        "price": 3,
        "section": "Sides"
    },
    {
        "name": "Brussels Sprouts, Irish Bacon",
        "price": 6,
        "section": "Sides"
    },
    {
        "name": "Creamy Spinach",
        "price": 6,
        "section": "Sides"
    },
    {
        "name": "Mushrooms",
        "price": 6,
        "section": "Sides"
    }
]
# Create your views here.


@api_view(['GET'])
def ping(request): 
    if request.method == 'GET':
        return Response({"detail": "pong"}, status = status.HTTP_200_OK) 
        # "name": "Grilled Calamari",
        # "ingredients": ["crispy fried tentacles", "jalapeños", "cilantro", "whipped avocado"],
        # "price": 15,
        # "section": "Snacks & Shares"

@api_view(['GET'])
def pre_populate(request):
    if request.method == 'GET':
        rest_id = uuid4() 
        menu_id = uuid4() 
        new_rest = Restaurant(
            id = rest_id, 
            name = 'Harvest', 
            description = 'Upscale New American dishes paired with wine & cocktails in a sleek, sophisticated locale.', 
            tags = ['Italian'],
            address = '1104 Chapel St, New Haven, CT 06510', 
            rating = 420 
        )
        new_rest.save() 
        new_menu = Menu(
            id = menu_id, 
            restaurant_id_id = rest_id, 
            menu_type = 'Italian', 
        )
        new_menu.save() 
        for food_data in FOODS: 
            ingr = [] 
            if 'ingredients' in food_data.keys(): 
                if isinstance(food_data['ingredients'],str): 
                    ingr = food_data['ingredients'].split() 
                else: 
                    ingr = food_data['ingredients']
            new_food = Food(
                name = food_data['name'],
                ingredients = ingr,
                price = food_data['price'], 
                section = food_data['section'], 
                description = "", 
                special_notes = [], 
                menu_id_id = menu_id
            )
            new_food.save()
        return Response({"detail": "pong"}, status = status.HTTP_200_OK) 

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

#Scan QR code, get rest
def QR_rest(request): 
    pass 

#Restaurant ID in request
@api_view(['GET'])
def get_restaurant(request): 
    data = {}
    uuid = UUID(request.GET.get('restaurant_id',0))
    # print("UUID: " + str(uuid)) 
    restaurant_data = Restaurant.objects.get(id = uuid)
    if restaurant_data:
        data = model_to_dict(restaurant_data,fields = ['created','name','description','tags','address','rating'])
    return JsonResponse(data) 
    
 

#Restaurant ID in request
def get_menus_for_restaurant(request): 
    pass

#Menu ID in request
def get_foods_for_menu(request): 
    pass 

#Post cart
def order(request): 
    pass 

def post_ratings(request): 
    pass 

def post_review(request): 
    pass 

def check_order_history(request): 
    pass 
def get_taste_profile(request): 
    pass 



        



    