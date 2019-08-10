from django.db import models
from django.contrib.auth.models import User


class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254, unique=True)
    phone = models.CharField(max_length=50)
    owner = models.ForeignKey(
        User, related_name='contacts', on_delete=models.CASCADE, null=True)
    create_at = models.DateField(auto_now=True)
