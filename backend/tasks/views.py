from django.shortcuts import render
from .models import Task
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from .serializers import TaskSerializer, UserSerializer
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


def index(request):
    return HttpResponse("Hello, this is the index page for tasks!")

class UserViewSet(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskViewSet(viewsets.ModelViewSet):
    """
    タスク管理用の API エンドポイント
    """
    queryset = Task.objects.all()  # すべてのタスクを取得
    serializer_class = TaskSerializer  # シリアライザーを指定
    #permission_classes = [permissions.IsAuthenticated] 

