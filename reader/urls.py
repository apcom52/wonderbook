from django.conf.urls import url
from . import views

urlpatterns = [
	url('^auth$', views.profile_auth),
	url('^book$', views.book),
	url('^$', views.index),
]