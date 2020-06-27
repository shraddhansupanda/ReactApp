from node
RUN mkdir /src
WORKDIR /src
ADD package.json /src/package.json
RUN npm install -y
RUN npm run-script build
EXPOSE  3000
EXPOSE 5000
RUN serve -s build" 
