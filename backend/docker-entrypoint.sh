#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Load the database
echo "Loading database"
python manage.py loadvariants --force

# Start server
echo "Starting server"
python manage.py runserver 0.0.0.0:8000
