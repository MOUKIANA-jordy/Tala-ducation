from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Cours, Ressource, Devoir
from .serializers import CoursSerializer, RessourceSerializer, DevoirSerializer

class CoursViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cours = Cours.objects.all()
        serializer = CoursSerializer(cours, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CoursSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RessourceViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        ressources = Ressource.objects.all()
        serializer = RessourceSerializer(ressources, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RessourceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DevoirViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        devoirs = Devoir.objects.all()
        serializer = DevoirSerializer(devoirs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DevoirSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
