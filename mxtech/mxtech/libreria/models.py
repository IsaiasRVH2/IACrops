from django.db import models


class Cultivo(models.Model):
    estado = models.CharField(max_length=100)
    municipio = models.CharField(max_length=100)
    semilla = models.CharField(max_length=100)
    fecha_siembra = models.DateField()
    tipo_riego = models.CharField(max_length=100)
    densidad_siembra = models.IntegerField()
# Create your models here.

class ConfiguracionCosecha(models.Model):
    ancho = models.DecimalField(max_digits=10, decimal_places=2)
    largo = models.DecimalField(max_digits=10, decimal_places=2)
    cosecha = models.CharField(max_length=100)

class Herramienta(models.Model):
    nombre = models.CharField(max_length=100)
