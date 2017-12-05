from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
	url('^collections/$', views.CollectionsList.as_view()),
	url('^books/$', views.BooksList.as_view()),
	url('^books/(?P<pk>[0-9]+)/$', views.BookDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)