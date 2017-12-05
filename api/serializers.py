from rest_framework import serializers
from reader.models import *

class CollectionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Collection
		fields = ('id', 'user', 'title')

class BookSerializer(serializers.ModelSerializer):
	class Meta:
		model = Book
		fields = ('id', 'title', 'description', 'cover', 'chapters', 'genres', 'isbn', 'authors', 'publisher', 'pub_year')