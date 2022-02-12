from django.shortcuts import render, get_object_or_404


from .models import Post

def detailView(request, slug):
  post = get_object_or_404(Post, slug=slug)

  return render(request,'project/detail.html', {'post': post})
