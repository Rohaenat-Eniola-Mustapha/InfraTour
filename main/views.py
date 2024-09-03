from django.shortcuts import render

def index_view(request):
    return render(request, 'main/index.html')

def login_view(request):
    return render(request, 'main/login.html')

def signup_view(request):
    return render(request, 'main/signup.html')

def contact_view(request):
    return render(request, 'main/contact.html')

def success_view(request):
    return render(request, 'main/success.html')
