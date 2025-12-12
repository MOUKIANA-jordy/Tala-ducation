from django.urls import path
from .views import RegisterView, UserListView, CustomAuthToken, user_dashboard

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('users/', UserListView.as_view(), name='users-list'),
    path('login/', CustomAuthToken.as_view(), name='login'),
    path('dashboard/', user_dashboard, name='dashboard'),
]
