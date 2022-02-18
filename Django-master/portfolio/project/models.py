from django.db import models
from ckeditor.fields import RichTextField
class Post(models.Model):
  title = models.CharField(max_length=255)
  slug = models.SlugField()
  intro = models.TextField()
  body = RichTextField()
  img = models.CharField(max_length=255)
  created_at = models.DateTimeField(auto_now_add=True)

  class Meta:
    ordering = ['-created_at',]