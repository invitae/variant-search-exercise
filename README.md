## Run locally

### Prerequisites
The client requires `npm`, and the server requires `python` and `mysql` to be installed.

### Setup and run server

`cd` into the `backend` folder, and create a new python environment (ex: `mkvirtualenv variant-search`), then run `pip install -r requirements.txt`. Setup the database by applying the migrations `python manage.py migrate`, then `python manage.py migrate --run-syncdb`.  Once the schema is setup, load data by running the following command: `python manage.py loadvariants`. After the database is setup, start the server: `python manage.py runserver`.

### Setup and run client

In another terminal window, `cd` into the `frontend` folder and rum `npm install` (this will take a few minutes), then `npm start`.  That will start the client server and a browser will open, loading `http://localhost:3000/`.