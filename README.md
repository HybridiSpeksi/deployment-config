# Deployment config project for HybridiSpeksi webpages

## Deployment system

docker-compose.yml handles pulling images from docker cloud and running them in a network.

## Setup

Environment variables will be read from .env file, which needs to be created when starting up an environment. .env contains required constants, secrets and keys for services. Contact administrators for .env variables.

1. Create file .prod_vars-env
2. Add env variables to file
3. Run node setup.js
