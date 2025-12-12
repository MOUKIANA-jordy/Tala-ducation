from rest_framework import serializers
from .models import Eleve, ParentEleve

class EleveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eleve
        fields = '__all__'

class ParentEleveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParentEleve
        fields = '__all__'
