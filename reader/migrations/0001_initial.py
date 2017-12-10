# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-12-03 13:59
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=32, verbose_name='Имя автора')),
                ('second_name', models.CharField(max_length=32, verbose_name='Отчество автора')),
                ('last_name', models.CharField(max_length=32, verbose_name='Фамилия автора')),
                ('alias', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='reader.Author')),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Название книги')),
                ('cover', models.ImageField(upload_to='media/uploads/%Y/%m/%d/')),
                ('pub_year', models.DateTimeField(verbose_name='Год издания')),
                ('description', models.TextField(verbose_name='Аннотация')),
                ('chapters', models.FileField(upload_to='', verbose_name='Файл книги')),
                ('genres', models.BigIntegerField(verbose_name='Жанры книги')),
                ('isbn', models.CharField(max_length=128, verbose_name='ISBN')),
                ('authords', models.ManyToManyField(to='reader.Author')),
                ('publisher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Bookmark',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64, verbose_name='Название закладки')),
                ('position', models.IntegerField(verbose_name='Позиция закладки')),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reader.Book')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Collection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=32, verbose_name='Название коллекции')),
                ('date', models.DateTimeField(auto_now=True)),
                ('books', models.ManyToManyField(to='reader.Book')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, verbose_name='Название жанра')),
            ],
        ),
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quote', models.TextField(verbose_name='Содержимое цитаты')),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reader.Book')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('end_date', models.DateTimeField(verbose_name='Крайний срок')),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reader.Book')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]