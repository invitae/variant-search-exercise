from django.conf.urls import include
from django.urls import re_path
from rest_framework import routers
from variant_search import views

router = routers.DefaultRouter()
router.register(r'variants', views.VariantViewSet)
router.register(r'genes', views.GeneViewSet)

# Wire up our API using automatic URL routing.
# TODO(rohit): authentication?
urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
