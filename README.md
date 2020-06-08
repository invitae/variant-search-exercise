## Setup and run project locally

### Prerequisites
This application requires Git and Docker Desktop to be cloned locally and installed.

### Build and launch the application

In a terminal window:

- First cd to the top project directory. the server code is in the `backend` directory and the client in the `frontend` directory.
- Build the backend and frontend docker images with `docker-compose build`
- Start the backend and frontend containers with `docker-compose up` (This initializes and loads the database. It will take ~15 minutes).

### Verify the application is running

- Once the loading the database is complete both the server and client should be running.
- A browsable API for the serving can be accessed on http://localhost:8000/ .
- The client for the application can be accessed on http://localhost:3000/ .

### Cleaning up

- The docker containers can be stopeed and cleanded up with `docker-compose down --remove-orphans`

