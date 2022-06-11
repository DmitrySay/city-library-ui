#!/bin/bash

#build react app
npm install
npm run build

#create docker image
docker build -t  city-library-ui:latest .

#start ui app
docker-compose up -d
