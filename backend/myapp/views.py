from django.http import JsonResponse
from rest_framework import viewsets, filters
from .models import Item
from .serializers import ItemSerializer

# ✅ Add this function for the homepage
def homepage(request):
    return JsonResponse({"message": "Welcome to the Django API! Visit /api/ to access data."})

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'category']
