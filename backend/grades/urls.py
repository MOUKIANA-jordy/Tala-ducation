from django.urls import path
from .views import NoteViewSet, BulletinViewSet

urlpatterns = [
    path('notes/', NoteViewSet.as_view(), name='notes-list'),
    path('bulletins/', BulletinViewSet.as_view(), name='bulletins-list'),
]
