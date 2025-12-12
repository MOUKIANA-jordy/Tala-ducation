from rest_framework import serializers
from .models import Cours, Ressource, Devoir
from teachers.serializers import EnseignantSerializer, MatiereSerializer

class CoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cours
        fields = '__all__'

class RessourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ressource
        fields = '__all__'

class DevoirSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devoir
        fields = '__all__'
