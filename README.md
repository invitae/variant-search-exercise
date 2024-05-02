## Setup and run the project locally

### Prerequisites
[Docker](https://docs.docker.com/engine/install/) is recommended to be locally installed to set the project up.

However, you can set up the frontend and backend by hand without Docker if you are familiar with installing and building with python & npm (not covered in this readme).


### Build and launch the application

In a terminal window:

- First `cd` to the top project directory. The server code is in the `backend` directory and the client in the `frontend` directory.
- Build the backend and frontend docker images with `docker compose build`
- Start the app with `docker compose up`

If you're interested in picking up Kafka tasks, please use https://github.com/confluentinc/cp-all-in-one
#### example
```shell
$ curl --silent --output docker-compose-with-kafka.yml https://raw.githubusercontent.com/confluentinc/cp-all-in-one/6.2.0-post/cp-all-in-one/docker-compose.yml
$ docker compose -f docker-compose-with-kafka.yml up
```
should get you set up with local `kafka` stack. 

### Verify the application is running

- Once the database is finished loading, both the server and client should be running.
- A browsable API for the server can be accessed on http://localhost:8000/
- The client application can be accessed on http://localhost:3000/

### Cleaning up

- Stop the docker containers by issuing ctrl+C in the terminal running `compose up` from earlier step.
- Clean up the installation by running `docker compose down -v --remove-orphans`
