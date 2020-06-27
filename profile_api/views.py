from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status,viewsets,filters
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .permissions import UserOwnProfile,UserUpdateOwnStatus
from .serializer import HelloSerializer,ProfileSerializer,ProfileFeedItemSerializer
from .models import UserProfile,ProfileFeedItem

class UserProfileViewSet(viewsets.ModelViewSet):
    """Handling user profile"""
    serializer_class = ProfileSerializer
    queryset = UserProfile.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [UserOwnProfile]
    filter_backends = [filters.SearchFilter]
    search_fields = ['name','email']

class UserLoginApiView(ObtainAuthToken):
    """ user login api """
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class UserProfileFeedItem(viewsets.ModelViewSet):
    """" User profile feed """
    authentication_classes = [TokenAuthentication]
    serializer_class = ProfileFeedItemSerializer
    permission_classes = [UserUpdateOwnStatus, IsAuthenticated]
    queryset  = ProfileFeedItem.objects.all()


    def perform_create(self,serializer):
        """ get user to specific profile when loged in"""
        serializer.save(user_profile=self.request.user)


""" not used bellow data,this is for basic understanding
   for beginners"""



# class HelloWord(APIView):
#     serializer_class = HelloSerializer
#     def get(self,request,format=None):
#         get_api = [
#             'we can get put get patch delete post request',
#             'api view is great for doing programming',
#             'section coding is awersome',
#             'long live pakistan!'
#         ]
#         return Response({
#             'hello':"Hello world",
#             'get_api':get_api
#         })
#     def post(self,request,format=None):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             name = serializer.validated_data.get('name')
#             message = f'Hello {name}'
#             return Response(message , status=status.HTTP_201_CREATED )
#         return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
#
#     def put(self,request,pk=None):
#         name = self.serializer_class.get('name')
#         return Response({"method":'PUT',"name":nameu })
#
#     def patch(self,request,pk=None):
#         return Response({"method":"PATCH"})
#
#     def delete(self,request,pk=None):
#         return Response({"method":"DELETE"})
#
#
# class HelloViewSets(viewsets.ViewSet):
#     serializer_class = HelloSerializer
#     def list(self,request):
#         get_api = [
#             'we can get put get patch delete post request',
#             'api view is great for doing programming',
#             'section coding is awersome',
#             'long live pakistan!'
#         ]
#         name = 'kashif is the great boy'
#         str = f'Hello {name}'
#         return Response({
#             'hello':"Hello world",
#             'get_api':get_api,
#             'str':str
#         })
#     def create(self,request):
#         serializer = self.serializer_class(data=request.data)
#
#         if serializer.is_valid():
#             name = serializer.validated_data.get('name')
#             data = f"Hell {name} "
#             return Response(
#                 {
#                     "data":data
#                 },
#                 status.HTTP_201_CREATED,
#             )
#         return Response(serializer.errors,status.HTTP_400_BAD_REQUEST)
#     def update(self,request,pk=None):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             name = serializer.validated_data.get('name')
#             message = f"Message {name}"
#             return Response({
#                 "message":message
#             },
#             status.HTTP.HTTP_201_CREATED
#             )
#     def retrieve(self,request,pk=None):
#         return Response({
#             status:status.HTTP_200_OK,
#             "http method":"retrive method"
#         })
#
#
#     def partial_update(self,request,pk=None):
#         return Response({
#             "http method":"PATCH",
#             status:status.HTTP_200_OK
#         })
#
#     def destroy(self,request,pk=None):
#         return Response({
#             "http method":"DELETE",
#             status:status.HTTP_204_NO_CONTENT
#         })
#
