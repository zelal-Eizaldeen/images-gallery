FROM node:22.12.0-alpine

WORKDIR /home/node/app


COPY package.json package-lock.json ./

RUN npm install -g npm@11.0.0

COPY . ./

EXPOSE 3000


CMD ["npm", "start"]