from django.conf.urls import url
from . import views

urlpatterns = [
	url('^auth$', views.profile_auth, name='profile_auth'),
	url('^$', views.index, name='index'),
]