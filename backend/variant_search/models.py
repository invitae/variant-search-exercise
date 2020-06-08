from django.db import models

class Variant(models.Model):
    gene = models.CharField(max_length=512)
    nucleotide_change = models.TextField()
    protein_change = models.TextField()
    other_mappings = models.TextField()
    alias = models.CharField(max_length=512)
    transcripts = models.CharField(max_length=512)
    region = models.CharField(max_length=512)
    reported_classification = models.TextField()
    inferred_classification = models.TextField()
    source = models.CharField(max_length=512)
    last_evaluated = models.DateTimeField(null=True, blank=True)
    last_updated = models.DateTimeField(null=True, blank=True)
    url = models.CharField(max_length=512)
    submitter_comment = models.TextField()
    assembly = models.CharField(max_length=512)
    chr = models.CharField(max_length=512)
    genomic_start = models.CharField(max_length=512)
    genomic_stop = models.CharField(max_length=512)
    ref = models.CharField(max_length=512)
    alt = models.CharField(max_length=512)
    accession = models.CharField(max_length=512)
    reported_ref = models.CharField(max_length=512)
    reported_alt = models.CharField(max_length=512)

    class Meta:
        ordering = ('gene',)
