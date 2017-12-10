from django.shortcuts import render, redirect
from django.contrib import auth
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

# Create your views here.
def profile_auth(request):
	post_data = request.POST

	errors = []
	context = {}

	if post_data:
		if (post_data['method'] == 'in'):
			login = post_data['username'].strip()
			password = post_data['password'].strip()

			auth_user = authenticate(username=login, password=password)

			if auth_user is None:
				errors.append('Не удалось авторизоваться в системе')
			else:
				auth.login(request, auth_user)
				return redirect('/')

		elif (post_data['method'] == 'up'):
			import re

			login = post_data['username'].strip()
			email = post_data['email'].strip()
			password = post_data['password'].strip()
			repassword = post_data['repassword'].strip()

			emailPattern = re.compile("[^@]+@[^@]+\.[^@]+")

			if len(login) < 4:
				errors.append('Логин должен быть не короче, чем 4 символа')

			if len(password) < 6:
				errors.append('Пароль не должен быть короче, чем 6 символов')

			if not re.match(emailPattern, email):
				errors.append('Некорректный email')

			if password != repassword:
				errors.append('Пароли не совпадают')

			if not errors:
				user = User.objects.create_user(login, email, password)
				user.save()
				auth_user = authenticate(username = login, password = password)
				auth.login(request, auth_user)
				return redirect('/')

		context = {
			'errors': errors
		}
	return render(request, 'login.html', context)

def index(request):
	if not request.user.is_authenticated():
		return redirect('/auth')
	context = {}
	return render(request, 'index.html', context)
