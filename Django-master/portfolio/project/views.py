from django.shortcuts import render, get_object_or_404
from project.models import Post


def detailView(request, slug):
  post = get_object_or_404(Post, slug=slug)
  latestPosts = Post.objects.all()[0:3]
  return render(request,'project/detail.html', {'post': post, 'latestPosts':latestPosts})
