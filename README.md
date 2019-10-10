## Setup and run project locally

### Prerequisites
The client requires `npm`, and the server requires `python3` to be installed.

### Setup and run server

In a terminal window:

- the server code is in the `backend` directory, so `cd backend`
- create a new python environment with ``virtualenv --python=`which python3` variant-search-venv``
- activate the new python virtual environment with `source variant-search-venv/bin/activate`
- install all the project requirements by running `pip install -r requirements.txt`
- move into the Django app root with `cd variant_search`
- setup the database by applying the migrations with `python manage.py migrate --run-syncdb`
- once the schema is setup, load data by running `python manage.py loadvariants` (this may take a few minutes)
- after the database is setup, start the server with `python manage.py runserver`

That will start the server, with a browsable API running on http://localhost:8000/ .

### Setup and run client

In another terminal window:

- the client code is in the `frontend` directory, so `cd frontend`
- install all the dependencies by running `npm install` (this may take a few minutes)
- then run `npm start`

That will start the client and a browser will open, loading http://localhost:3000/ .

## Project management

You can review the tickets here: https://trello.com/b/2PHSlIGB/variant-search
