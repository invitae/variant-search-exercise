FROM node:16-alpine3.12

WORKDIR /opt/frontend
COPY package.json .
COPY package-lock.json .

COPY . .

RUN npm install

