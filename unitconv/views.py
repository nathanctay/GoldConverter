from django.shortcuts import render
from django.http import JsonResponse
from .models import Unit

# Create your views here.
def convert(request):
    response = {}
    if 'from' not in request.GET:
        response['error'] = "Invalid unit conversion request"
    elif 'to' not in request.GET:
        response['error'] = "Invalid unit conversion request"
    elif 'value' not in request.GET:
        response['error'] = "Invalid unit conversion request"
    elif not request.GET['value'].isdigit():
        response['error'] = "Invalid unit conversion request"
    else:
        response['unit'] = request.GET['to']
        response['value'] = converter(request.GET['from'], request.GET['to'], request.GET['value'])
    return JsonResponse(response)

def converter(fr, to, value):
    fromUnit = Unit.objects.get(name=fr)
    toUnit = Unit.objects.get(name=to)
    conversionFactor = toUnit.conversion / fromUnit.conversion 
    return float(value) * conversionFactor
