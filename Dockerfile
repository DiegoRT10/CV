FROM node:22.12.0

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]