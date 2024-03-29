FROM node:latest
RUN mkdir /src
WORKDIR /src
ADD package.json /src/package.json
RUN npm install -y
COPY . /src
RUN npm run-script build
RUN apt-get update && apt-get upgrade
RUN apt-get install nginx -y
RUN service nginx start
WORKDIR /var/www/html/
RUN rm -rf *
#RUN cd /var/www/html/
RUN cp -r /src/build/* .
WORKDIR /etc/nginx
EXPOSE  80
# CMD ["service","nginx","start"]
# CMD ["nginx"]
# CMD ["sleep",'10000']
CMD ["nginx","-g","daemon off;"]
