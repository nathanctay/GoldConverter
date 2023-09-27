from . import views
from django.urls import path

app_name = 'gold'
urlpatterns = [
    path('', views.index, name = 'index'),
    path('index', views.index, name = 'index'),
    path('sdp', views.sdp, name = 'SDP'),
]