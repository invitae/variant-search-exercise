FROM node:20-alpine

WORKDIR /opt/frontend
COPY package.json .
COPY package-lock.json .

COPY . .

RUN npm install
