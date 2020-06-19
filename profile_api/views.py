from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializer import HelloSerializer
class HelloWord(APIView):
    serializer_class = HelloSerializer
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
    def post(self,request,format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            message = f'Hello {name}'
            return Response(message , status=status.HTTP_201_CREATED )
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)

    def put(self,request,pk=None):
        return Response({"method":'PUT'})

    def patch(self,request,pk=None):
        return Response({"method":"PATCH"})

    def delete(self,request,pk=None):
        return Response({"method":"DELETE"})
