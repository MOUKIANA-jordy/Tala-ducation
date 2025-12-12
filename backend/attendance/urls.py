from django.urls import path
from .views import AbsenceViewSet, RetardViewSet, EmploiDuTempsViewSet

urlpatterns = [
    path('absences/', AbsenceViewSet.as_view(), name='absences-list'),
    path('retards/', RetardViewSet.as_view(), name='retards-list'),
    path('emplois/', EmploiDuTempsViewSet.as_view(), name='emplois-list'),
]
