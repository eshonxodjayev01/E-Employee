from django.shortcuts import render

# Create your views here.

# def home(request):
#     return render(request, 'dashboard.html')

from django.shortcuts import render

def home(request):
    employees = [
        {"name": "John Doe", "position": "Manager", "status": "Active"},
        {"name": "Jane Smith", "position": "Developer", "status": "On Leave"},
        {"name": "Mark Brown", "position": "Designer", "status": "Active"},
        {"name": "Rose White", "position": "Developer", "status": "Active"},
    ]
    return render(request, 'dashboard.html', {'employees': employees})

def community(request):
    return render(request, 'community.html')

def profile(request):
    return render(request, 'profile.html')

def chat(request):
    return render(request, 'chat.html')

def login_view(request):
    return render(request, 'login.html')
