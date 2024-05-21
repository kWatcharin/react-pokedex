FROM node20.13

WORKDIR /app

COPY ./ ./

RUN npm install

COPY ./ ./

CMD [ "npm run build" ]