from django.urls import path
from . import views


urlpatterns = [
    path('hello_world/',views.HelloWord.as_view())
]
