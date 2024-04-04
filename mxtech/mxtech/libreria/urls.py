from django.urls import path
from . import views


urlpatterns = [
    path ('', views.inicio, name = 'inicio'),
    path ('dashboard', views.dashboard, name = 'dashboard'),
    path ('configcrops', views.configcrops, name = 'configcrops'),
    path('guardar_configuracion/', views.guardar_configuracion, name='guardar_configuracion'),
    path ('managecrops', views.managecrops, name = 'managecrops'),
    path('guardar_datos/', views.guardar_datos, name='guardar_datos'),
    path ('gadgetscrops', views.gadgetscrops, name = 'gadgetscrops'),
    path ('guardar_herramientas', views.guardar_herramientas, name = 'guardar_herramientas'),
    path ('Menu', views.Menu, name = 'Menu'),
]