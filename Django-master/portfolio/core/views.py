from django.shortcuts import render

from project.models import Post

def indexView(request):
  posts = Post.objects.all()
  return render(request, 'core/index.html', {'posts':posts})


def projectView(request):
  posts = Post.objects.all()
  return render(request, 'core/project.html', {'posts':posts})

def aboutView(request):
  return render(request, 'core/about.html')
