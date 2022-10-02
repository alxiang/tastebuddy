from django.urls import path

from .views import login, order, populate, postorder, profile, restaurants

urlpatterns = [
    path("ping/", populate.ping),
    path("pre_populate/", populate.pre_populate),
    
    path("login/", login.login),
    path("signup/", login.signup),

    path("restaurant/<str>:id", restaurants.get_restaurant),
    path("menu/<str>:id", restaurants.get_menus_for_restaurant),

    path("foods/", order.get_foods_for_menu),
    path("order/", order.order),

    path("ratings/", postorder.post_ratings),
    path("review/", postorder.post_review),

    path("userorders/<str>:id", profile.check_order_history),
    path("tasteprofile/<str>:id", profile.get_taste_profile),
]
