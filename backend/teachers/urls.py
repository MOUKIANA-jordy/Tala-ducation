from django.urls import path
from .views import EnseignantViewSet, MatiereViewSet

urlpatterns = [
    path('enseignants/', EnseignantViewSet.as_view(), name='enseignants-list'),
    path('matieres/', MatiereViewSet.as_view(), name='matieres-list'),
]
