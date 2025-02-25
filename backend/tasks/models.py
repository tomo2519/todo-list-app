from django.db import models
from django.contrib.auth.models import User  # ✅ Django の `User` をインポート

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # ✅ Django の `User` を参照
    title = models.CharField(max_length=255)  # タスク名
    due_date = models.DateField()  # 期限
    completed = models.BooleanField(default=False)  # 完了状態

    def __str__(self):
        return self.title
