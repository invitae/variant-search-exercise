from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class VariantTests(APITestCase):
    def test_variant_endpoint(self):
        url = reverse('variant-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
