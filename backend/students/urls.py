from django.urls import path
from .views import EleveViewSet, ParentEleveViewSet

urlpatterns = [
    path('eleves/', EleveViewSet.as_view(), name='eleves-list'),
    path('parents/', ParentEleveViewSet.as_view(), name='parents-list'),
]
