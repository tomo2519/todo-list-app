from django.db import models
from django.contrib.auth.models import User  # ✅ Django の `User` をインポート

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # ユーザーに紐づくタスク
    title = models.CharField(max_length=255)  # タスクのタイトル
    due_date = models.DateField()  # 期限
    completed = models.BooleanField(default=False)  # 完了フラグ
    first_task = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.title
