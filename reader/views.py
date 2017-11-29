from django.shortcuts import render

# Create your views here.
def auth(request):
	return render(request, 'login.html', {})

def index(request):
	return render(request, '', {})
