

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet  #  Ensure this matches your views.py

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),  #  Include all API routes
]

