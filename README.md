## Setup and run the project locally

### Prerequisites
This application requires Git and [Rancher Desktop](https://docs.rancherdesktop.io/getting-started/installation/) to be locally installed.


### Build and launch the application

In a terminal window:

- First cd to the top project directory. The server code is in the `backend` directory and the client in the `frontend` directory.
- Build the backend and frontend docker images with `nerdctl compose build`
- Start the backend `nerdctl compose up backend`
- In another terminal, start the frontend `nerdctl compose up frontend`

If you're interested in picking up Kafka tasks, please use https://github.com/confluentinc/cp-all-in-one
#### example
```shell
$ curl --silent --output docker-compose-with-kafka.yml https://raw.githubusercontent.com/confluentinc/cp-all-in-one/6.2.0-post/cp-all-in-one/docker-compose.yml
$ nerdctl compose -f docker-compose-with-kafka.yml up
```
should get you set up with local `kafka` stack. 

### Verify the application is running

- Once the database is finished loading, both the server and client should be running.
- A browsable API for the server can be accessed on http://localhost:8000/
- The client application can be accessed on http://localhost:3000/

### Cleaning up

- The docker containers can be stopped and cleaned up with `nerdctl compose down --remove-orphans`
