from django.urls import path,include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register('profile',views.UserProfileViewSet)
router.register('feed',views.UserProfileFeedItem)

urlpatterns = [
    path('login/', views.UserLoginApiView.as_view()),
    path('',include(router.urls))
]
