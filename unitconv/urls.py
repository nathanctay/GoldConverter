from . import views
from django.urls import path

app_name = 'unitconv'
urlpatterns = [
    path('', views.convert, name = 'convert'),
]