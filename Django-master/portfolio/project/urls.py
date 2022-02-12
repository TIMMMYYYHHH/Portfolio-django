from django.urls import path


from . import views

urlpatterns = [
  path('<slug:slug>/', views.detailView, name='post_detail'),
]