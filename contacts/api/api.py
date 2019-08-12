from .models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer

# Contact Viewset


class ContactViewSets(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ContactSerializer

    def get_queryset(self):
        return self.request.user.contacts.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)