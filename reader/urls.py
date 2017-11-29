from django.conf.urls import url
from . import views

urlpatterns = [
	url('^auth$', views.auth, name='auth'),
	url('^$', views.index, name='index'),
]