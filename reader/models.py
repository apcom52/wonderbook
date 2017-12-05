from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
	user = models.OneToOneField(User)
	books = models.ManyToManyField('Book')

class Genre(models.Model):
	name = models.CharField('Название жанра', max_length=32)

	def __str__(self):
		return self.name

class Author(models.Model):
	first_name = models.CharField('Имя автора', max_length=32)
	second_name = models.CharField('Отчество автора', max_length=32)
	last_name = models.CharField('Фамилия автора', max_length=32)
	alias = models.ForeignKey('self', blank=True, null=True)
	birth_date = models.DateTimeField('Дата рождения')
	photo = models.ImageField(upload_to="media/uploads/%Y/%m/%d/", blank=True, null=True)

	def __str__(self):
		return '%s %s %s' % (self.first_name, self.second_name, self.last_name)

class AuthorAdmin(admin.ModelAdmin):
	list_display = ('last_name', 'first_name', 'second_name', 'alias')

class Book(models.Model):
	publisher = models.ForeignKey(User)
	title = models.CharField('Название книги', max_length=128)
	cover = models.ImageField(upload_to="media/uploads/%Y/%m/%d/")
	pub_year = models.DateTimeField('Год издания')
	description = models.TextField('Аннотация')
	chapters = models.FileField('Файл книги')
	genres = models.BigIntegerField('Жанры книги')
	isbn = models.CharField('ISBN', max_length=128)
	authors = models.ManyToManyField(Author)

	def __str__(self):
		return self.title

class BookAdmin(admin.ModelAdmin):
	list_display = ('title',)

class Collection(models.Model):
	user = models.ForeignKey(User)
	title = models.CharField('Название коллекции', max_length=32)
	date = models.DateTimeField(auto_now=True)
	books = models.ManyToManyField(Book)

	def __str__(self):
		return self.title

class CollectionAdmin(admin.ModelAdmin):
	list_display = ('user', 'title')

class Bookmark(models.Model):
	user = models.ForeignKey(User)
	book = models.ForeignKey(Book)
	title = models.CharField('Название закладки', max_length=64)
	position = models.IntegerField('Позиция закладки')

	def __str__(self):
		return self.title

class BookmarkAdmin(admin.ModelAdmin):
	list_display = ('user', 'book', 'title', 'position')

class Quote(models.Model):
	user = models.ForeignKey(User)
	book = models.ForeignKey(Book)
	quote = models.TextField('Содержимое цитаты')

class QuoteAdmin(admin.ModelAdmin):
	list_display = ('user', 'book', 'quote')

class Task(models.Model):
	user = models.ForeignKey(User)
	book = models.ForeignKey(Book)
	end_date = models.DateTimeField('Крайний срок')

class TaskAdmin(admin.ModelAdmin):
	list_display = ('user', 'book', 'end_date')