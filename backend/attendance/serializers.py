from rest_framework import serializers
from .models import Absence, Retard, EmploiDuTemps

class AbsenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Absence
        fields = '__all__'

class RetardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retard
        fields = '__all__'

class EmploiDuTempsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploiDuTemps
        fields = '__all__'
