from rest_framework import serializers

from variant_search.models import Variant


class VariantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Variant
        fields = (
            'gene',
            'nucleotide_change',
            'protein_change',
            'other_mappings',
            'alias',
            'transcripts',
            'region',
            'reported_classification',
            'inferred_classification',
            'source',
            'last_evaluated',
            'last_updated',
            'url',
            'submitter_comment',
            'assembly',
            'chr',
            'genomic_start',
            'genomic_stop',
            'ref',
            'alt',
            'accession',
            'reported_ref',
            'reported_alt'
        )

class GeneSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Variant
        fields = (
            'gene',
        )
