FROM node:18-alpine3.14 AS builder

ARG REACT_APP_SERVER

WORKDIR /app

COPY package.json .
COPY yarn.lock .
# COPY vite.config.js .

RUN yarn

COPY . .

EXPOSE 3000

# curl 설치
RUN apk add --no-cache curl

# ENTRYPOINT ["npm", "run", "dev"]
ENTRYPOINT ["yarn", "dev"]
