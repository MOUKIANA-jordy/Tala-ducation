from django.urls import path
from .views import CoursViewSet, RessourceViewSet, DevoirViewSet

urlpatterns = [
    path('cours/', CoursViewSet.as_view(), name='cours-list'),
    path('ressources/', RessourceViewSet.as_view(), name='ressources-list'),
    path('devoirs/', DevoirViewSet.as_view(), name='devoirs-list'),
]
