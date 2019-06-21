from variant_search.models import Variant
from rest_framework import pagination, viewsets
from variant_search.serializers import GeneSerializer, VariantSerializer

class VariantViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows queries to fetch Variant data.
    """
    # The variable must be named queryset
    # Filter out rows with a blank gene
    # Apply and then filter by the gene param if set
    queryset = Variant.objects.exclude(gene='')
    serializer_class = VariantSerializer

    def get_queryset(self):
        """
        Filter by the gene param if set
        """
        geneSearch = self.request.query_params.get('geneSearch', None)
        if (geneSearch is not None):
            return Variant.objects.filter(gene=geneSearch)

        return Variant.objects.exclude(gene='')

class GeneViewSetPagination(pagination.PageNumberPagination):
    # Return a lot more gene values, since they are small
    page_size = 100

class GeneViewSet(viewsets.ModelViewSet):
    """
    API endpoint for the gene autosuggest feature
    """
    # The variable must be named queryset
    # Filter out rows with a blank gene
    # Apply and then filter by the gene param if set
    queryset = Variant.objects.exclude(gene='').distinct()
    serializer_class = GeneSerializer
    # Return a lot more gene values, since they are small
    pagination_class = GeneViewSetPagination

    def get_queryset(self):
        """
        Filter by the gene param if set
        """
        geneSuggest = self.request.query_params.get('geneSuggest', '')
        # remove spaces - we want to ignore those results
        geneSuggest = geneSuggest.strip()
        if (geneSuggest is not None or len(geneSuggest) > 0):
            return Variant.objects.filter(
                gene__contains=geneSuggest.upper()).values('gene').distinct()

        return Variant.objects.exclude(gene="").values('gene').distinct()
