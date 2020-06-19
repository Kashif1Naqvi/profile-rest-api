from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
class HelloWord(APIView):
    def get(self,request,format=None):
        get_api = [
        'we can get put get patch delete post request',
        'api view is great for doing programming',
        'section coding is awersome',
        'long live pakistan!'
        ]
        return Response({
            'hello':"Hello world",
            'get_api':get_api
        })
