from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from reader.models import *
from .serializers import *


# Create your views here.
class CollectionsList(APIView):
	def get(self, request, format = None):
		collections = Collection.objects.filter(user=request.user)
		print(collections)
		serializer = CollectionSerializer(collections, many=True)
		print(serializer)
		return Response(serializer.data)

class BooksList(APIView):
	def get(self, request, format=None):
		books = request.user.profile.books.all()
		serializer = BookSerializer(books, many=True)
		return Response(serializer.data)

class BookDetail(APIView):
	def get(self, request, pk, format=None):
		book = Book.objects.get(pk = pk)
		book = BookSerializer(book)
		return Response(book.data)