from django.urls import path,include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register('viewsets',views.HelloViewSets,basename="hello viewset")
router.register('profile',views.UserProfileViewSet)
router.register('feed',views.UserProfileFeedItem)

urlpatterns = [
    path('hello_world/',include(router.urls)),
    path('login/', views.UserLoginApiView.as_view()),
    path('',include(router.urls))
]
