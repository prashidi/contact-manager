from rest_framework import viewsets, permissions

from . serializers import ContactSerializer
from . models import Contact


class ContactViewSets(viewsets.ModelViewSet):
    permission_class = [
        permissions.IsAuthenticated
    ]

    serializer_class = ContactSerializer

    def get_queryset(self):
        return self.request.user.contacts.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
