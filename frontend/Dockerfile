FROM node:18-alpine3.14 AS builder

ARG REACT_APP_SERVER

WORKDIR /app

RUN npm install vite -g

COPY package.json .
COPY yarn.lock .
# RUN yarn install

RUN npm install

COPY . .

EXPOSE 3000

# curl 설치
RUN apk add --no-cache curl

# ENTRYPOINT ["npm", "run", "dev"]
ENTRYPOINT ["npm", "run", "dev"]
