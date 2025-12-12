from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Eleve, ParentEleve
from .serializers import EleveSerializer, ParentEleveSerializer

class EleveViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        eleves = Eleve.objects.all()
        serializer = EleveSerializer(eleves, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EleveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ParentEleveViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        parents = ParentEleve.objects.all()
        serializer = ParentEleveSerializer(parents, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ParentEleveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
