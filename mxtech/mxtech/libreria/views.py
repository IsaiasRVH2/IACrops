from django.shortcuts import render, redirect
from django.urls import reverse
from .models import Cultivo, ConfiguracionCosecha, Herramienta


# Create your views here.
def inicio(request): 
    return redirect(reverse('Menu'))

def dashboard(request):
    return render(request, 'paginas/dashboard.html')

def configcrops(request):
    return render(request, 'paginas/configcrops.html')

def managecrops(request):
    if request.method == 'POST':
        # Procesar los datos del formulario
        estado = request.POST.get('estado')
        municipio = request.POST.get('municipio')
        semilla = request.POST.get('semilla')
        fecha_siembra = request.POST.get('fecha_siembra')
        tipo_riego = request.POST.get('tipo_riego')
        densidad_siembra = request.POST.get('densidad_siembra')
        
        # Guardar los datos en la base de datos
        Cultivo.objects.create(
            estado=estado,
            municipio=municipio,
            semilla=semilla,
            fecha_siembra=fecha_siembra,
            tipo_riego=tipo_riego,
            densidad_siembra=densidad_siembra
        )
        
        # Redirigir a la misma página después de guardar los datos
        return redirect('managecrops')
    else:
        # Renderizar la página con el formulario
        return render(request, 'paginas/managecrops.html')

def guardar_herramientas(request):
    if request.method == 'POST':
        herramientas_seleccionadas = request.POST.getlist('herramienta')
        
        # Guardar las herramientas seleccionadas en la base de datos
        for herramienta in herramientas_seleccionadas:
            Herramienta.objects.create(nombre=herramienta)
        
        return redirect('gadgetscrops')
    else:
        return redirect('gadgetscrops')

def guardar_datos(request):
    if request.method == 'POST':
        estado = request.POST.get('estado')
        municipio = request.POST.get('municipio')
        Cultivo.objects.create(estado=estado, municipio=municipio)
        return redirect('managecrops')
    else:
        return redirect('managecrops')

def guardar_configuracion(request):
    if request.method == 'POST':
        ancho = request.POST.get('ancho')
        largo = request.POST.get('largo')
        cosecha = request.POST.get('cosecha')
        
        # Guardar los datos en la base de datos
        ConfiguracionCosecha.objects.create(ancho=ancho, largo=largo, cosecha=cosecha)
        
        return redirect('configcrops')
    else:
        return redirect('configcrops')

def gadgetscrops(request):
    return render(request, 'paginas/gadgetscrops.html')

def Menu(request):
    return render(request, 'paginas/Menu.html')