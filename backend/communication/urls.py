from django.urls import path
from .views import MessageViewSet

urlpatterns = [
    path('messages/', MessageViewSet.as_view(), name='messages-list'),
]
