FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN node_modules/.bin/ng build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/SmartSchool usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t smartschool .
# docker run -p 8081:80 smartschool