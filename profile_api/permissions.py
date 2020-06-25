from rest_framework import  permissions

class UserOwnProfile(permissions.BasePermission):
    """ Allow user to update own profile """

    def has_object_permission(self,request,view,obj):

        if request.method == permissions.SAFE_METHODS:
            return True

        return obj.id == request.user.id
