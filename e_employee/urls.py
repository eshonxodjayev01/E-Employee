from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='dashboard'),
    path('community/', views.community, name='community'),
    path('profile/', views.profile, name='profile'),
    path('chat/', views.chat, name='chat'),
    path('login/', views.login_view, name='login'),  # Ensure 'login_view' matches your view name
]
