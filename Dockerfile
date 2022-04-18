# build environment
FROM node:13.12.0-alpine as build
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm ci --silent
# RUN npm install --silent
# COPY . ./
# RUN npm run build
# WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# COPY public/* ./build
# ENTRYPOINT [ "npm", "run", "start:prod"]

# production environment
# FROM nginx:stable-alpine
COPY ./ /home/ubuntu/react-docker
# new
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]