FROM node:12.14.0-alpine3.9

RUN apk update

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g create-react-app

RUN npm install --silent

CMD ["npm", "start"]
