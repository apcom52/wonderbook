from django.conf.urls import url
from . import views

urlpatterns = [
	url('^auth$', views.profile_auth),
	url('^book/(?P<id>[0-9]+)/', views.book),
	url('^$', views.index),
]