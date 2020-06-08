from django.conf.urls import url, include
from rest_framework import routers
from variant_search import views

router = routers.DefaultRouter()
router.register(r'variants', views.VariantViewSet)
router.register(r'genes', views.GeneViewSet)

# Wire up our API using automatic URL routing.
# TODO(rohit): authentication?
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
