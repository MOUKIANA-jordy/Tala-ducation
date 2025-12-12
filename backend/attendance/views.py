from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Absence, Retard, EmploiDuTemps
from .serializers import AbsenceSerializer, RetardSerializer, EmploiDuTempsSerializer

class AbsenceViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        absences = Absence.objects.all()
        serializer = AbsenceSerializer(absences, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AbsenceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RetardViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        retards = Retard.objects.all()
        serializer = RetardSerializer(retards, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RetardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmploiDuTempsViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        emplois = EmploiDuTemps.objects.all()
        serializer = EmploiDuTempsSerializer(emplois, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EmploiDuTempsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
