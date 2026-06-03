FROM jupyter/pyspark-notebook:latest

USER root
RUN pip install --quiet pyarrow pandas
USER $NB_UID
