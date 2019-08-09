from rest_framework import viewsets, permissions

from . serializers import ContactSerializer
from . models import Contact

class ContactViewSets(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_class = [
        permissions.AllowAny
    ]

    serializer_class = ContactSerializer