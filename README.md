## Setup and run the project locally

### Prerequisites
This application requires Git and Docker Desktop to be locally installed.

### Build and launch the application

In a terminal window:

- First cd to the top project directory. The server code is in the `backend` directory and the client in the `frontend` directory.
- Build the backend and frontend docker images with `docker-compose build`
- Start the backend `docker-compose up backend`
- In another terminal, start the frontend `docker-compose up frontend`

### Verify the application is running

- Once the database is finished loading, both the server and client should be running.
- A browsable API for the server can be accessed on http://localhost:8000/
- The client application can be accessed on http://localhost:3000/

### Cleaning up

- The docker containers can be stopped and cleaned up with `docker-compose down --remove-orphans`
