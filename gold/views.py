from django.shortcuts import render
# from .models import Unit

# Create your views here.
def index(request):
    context = {'units': ['t_oz', 'T', 'g', 'kg', 'lb', 'g']}
    return render(request, 'gold/index.html', context)

def sdp(request):
    return render(request, 'gold/sdp.html')