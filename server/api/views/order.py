from api.models import Food
from django.forms.models import model_to_dict
from django.http import JsonResponse
from rest_framework.decorators import api_view


# Menu ID in request
@api_view(["GET"])
def get_foods_for_menu(request, menu_id):
    data = {"0": []}
    foods = list(Food.objects.all().filter(menu_id=menu_id))
    if foods:
        for food in foods:
            data["0"].append(
                model_to_dict(
                    food,
                    fields=[
                        "id",
                        "created",
                        "name",
                        "description",
                        "ingredients",
                        "price",
                        "special_notes",
                        "section",
                        "menu_id",
                    ],
                )
            )
    return JsonResponse(data)


# Post cart
@api_view(["GET"])
def order(request):
    pass
