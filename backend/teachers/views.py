from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Enseignant, Matiere
from .serializers import EnseignantSerializer, MatiereSerializer

class MatiereViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        matieres = Matiere.objects.all()
        serializer = MatiereSerializer(matieres, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MatiereSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EnseignantViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        enseignants = Enseignant.objects.all()
        serializer = EnseignantSerializer(enseignants, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EnseignantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
