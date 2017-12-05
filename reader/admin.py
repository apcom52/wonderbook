from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import *

class UserInline(admin.StackedInline):
	model = Profile
	can_delete = True
	verbose_name_plural = 'Дополнительно'

#Новый класс настроек для User
class UserAdmin(UserAdmin):
	inlines = (UserInline, )

# Register your models here.
admin.site.register(Genre)
admin.site.register(Author, AuthorAdmin)
admin.site.register(Book, BookAdmin)
admin.site.register(Collection, CollectionAdmin)
admin.site.register(Bookmark, BookAdmin)
admin.site.register(Quote, QuoteAdmin)
admin.site.register(Task, TaskAdmin)

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
