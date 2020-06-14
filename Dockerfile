FROM node:12.14.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@9.0.3
COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 4200
