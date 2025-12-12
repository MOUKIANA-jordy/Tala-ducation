from django.urls import path
from .views import ClasseViewSet

urlpatterns = [
    path('classes/', ClasseViewSet.as_view(), name='classes-list'),
]
