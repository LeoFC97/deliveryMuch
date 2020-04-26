FROM node:alpine

WORKDIR /usr/app/

COPY package*.json ./

COPY ./src/ .

RUN npm install

EXPOSE 3333

CMD ["npm", "start"]
