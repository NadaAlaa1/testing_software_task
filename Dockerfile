FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install express
RUN npm install express-handlebars
RUN npm install nodemon

COPY . .
CMD ["npm","start"]
