from django.db import models

# Create your models here.
class Unit(models.Model):
    name = models.TextField()
    conversion = models.FloatField()

    def __str__(self):
        return self.name