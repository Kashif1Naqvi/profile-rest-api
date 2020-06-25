from django.urls import path,include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register('viewsets',views.HelloViewSets,basename="hello viewset")
router.register('profile',views.UserProfileViewSet)

urlpatterns = [
    path('hello_world/',include(router.urls)),
    path('',include(router.urls))
]
