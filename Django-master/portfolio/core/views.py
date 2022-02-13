from django.shortcuts import render

from project.models import Post

def indexView(request):
  posts = Post.objects.all()[0:3]
  return render(request, 'core/index.html', {'posts':posts})


def projectView(request):
  posts = Post.objects.all()
  latestPosts = Post.objects.all()[0:3]
  return render(request, 'core/project.html', {'posts':posts, 'latestPosts':latestPosts})

def aboutView(request):
  return render(request, 'core/about.html')
