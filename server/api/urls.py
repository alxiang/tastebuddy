from django.urls import path

from .views import login, order, populate, postorder, profile, restaurants

urlpatterns = [
    path("ping/", populate.ping),
    path("pre_populate/", populate.pre_populate),
    
    path("login/", login.login),
    path("signup/", login.signup),

    path("restaurant/<str:restaurant_id>/", restaurants.get_restaurant),
    path("menu/<str:restaurant_id>/", restaurants.get_menus_for_restaurant),

    path("food/<str:menu_id>/", order.get_foods_for_menu),
    path("orders/<str:user_id>/", order.order),

    path("rating/<str:order_id>/<str:user_id>/", postorder.post_ratings),
    path("review/<str:order_id>/<str:user_id>/", postorder.post_review),

    path("userorders/<str:user_id>/", profile.check_order_history),
    path("tasteprofile/<str:user_id>/", profile.get_taste_profile),
]
