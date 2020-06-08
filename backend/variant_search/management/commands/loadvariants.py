import csv

from django.core.management.base import BaseCommand, CommandError

from variant_search.models import Variant

class Command(BaseCommand):
    help = 'Generate fixture dataset'

    def handle(self, *args, **options):
        EXPECTED_COLUMNS = 23

        line_number = 0
        variants_data = list(csv.reader(open('../data/variants.tsv', 'rt'), delimiter='\t'))

        for variant_data in variants_data:
            # Skip the header
            if line_number == 0:
                line_number = line_number + 1
                continue
            
            # some lines don't have all the columns - in that case, add empty strings
            data_length = len(variant_data)
            if (data_length < EXPECTED_COLUMNS):
                for i in range(EXPECTED_COLUMNS - data_length):
                    variant_data.append('')

            variant = Variant(
                gene=variant_data[0],
                nucleotide_change=variant_data[1],
                protein_change=variant_data[2],
                other_mappings=variant_data[3],
                alias=variant_data[4],
                transcripts=variant_data[5],
                region=variant_data[6],
                reported_classification=variant_data[7],
                inferred_classification=variant_data[8],
                source=variant_data[9],
                last_evaluated=variant_data[10] if len(variant_data[10]) else None,
                last_updated=variant_data[11] if len(variant_data[11]) else None,
                url=variant_data[12],
                submitter_comment=variant_data[13],
                assembly=variant_data[14],
                chr=variant_data[15],
                genomic_start=variant_data[16],
                genomic_stop=variant_data[17],
                ref=variant_data[18],
                alt=variant_data[19],
                accession=variant_data[20],
                reported_ref=variant_data[21],
                reported_alt=variant_data[22],
            )
            try:
                variant.save()
            except Exception as e:
                print(e)
                
            line_number = line_number + 1
