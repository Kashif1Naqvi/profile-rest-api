# Profile Rest api

user profile with user status handle in React hooks + Django 3.0 with rest framework with bootstrap 4 and jwt token

In which I add functionalities like

every user 

CREATE ACCOUNT 
LOGIN 
when user login then token genrated for use in the  form of object

User see all users profiles if he/she cannot be LOGIN
but cannot access any user Profile because I add restriction only 
the user of profile access GET ,PUT ,PATCH ,DELETE on the base of id in the profile

Any user Also SEARCH ANY PROFILE using SearchBar Form
if query not match then show error same like,that show in `Google`

User see all profiles but if click any profile ```see more``` then show error like this ``` Not found ``` 
If user Login with username and password then redirect to profile route not private it's public 
user find own profile when click that profile.
Then show user profile and login user see permissions for DELETING,UPDATING ,PATCHING,AND GOback button who help to user for performing a specific actions.
When user login and see profile user also create a status active or in meeting any thing else according to his/her requirments.
when click any status then move forward to single status then their user edit update or delete or patch the request in next components .
if user done their work then redirect to profile/user_id link.


