# build environment
FROM node:10.13.0 as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
