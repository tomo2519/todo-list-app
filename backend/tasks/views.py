from django.shortcuts import render
from .models import Task
from rest_framework import viewsets
from .serializers import TaskSerializer
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, this is the index page for tasks!")

class TaskViewSet(viewsets.ModelViewSet):
    """
    タスク管理用の API エンドポイント
    """
    queryset = Task.objects.all()  # すべてのタスクを取得
    serializer_class = TaskSerializer  # シリアライザーを指定

