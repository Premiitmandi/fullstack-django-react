from django.contrib import admin
from django.urls import path, include
from myapp.views import homepage

urlpatterns = [
    path('', homepage),  # Loads the HTML page
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
]
