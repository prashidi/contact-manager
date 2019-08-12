from rest_framework  import routers

from .api import ContactViewSets

router = routers.DefaultRouter()
router.register('api/contacts', ContactViewSets, 'contacts')

urlpatterns = router.urls

