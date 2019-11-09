FROM node:lts-alpine

ARG API_HOST

WORKDIR /usr/src/app

RUN apk update
RUN apk add git
RUN npm install -g --silent ember-cli

COPY package*.json ./
RUN npm ci --silent

COPY . .

RUN API_HOST=$API_HOST ember build --environment=production

CMD ["node", "/usr/src/app/fastboot-server.js"]
