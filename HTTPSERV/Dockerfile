
FROM node:10

WORKDIR /usr/src/app/stuff

#COPY package*.json ./

#RUN npm install

#COPY . .



COPY package.json /usr/src/app/stuff

RUN npm install

# Bundle app source
COPY . /usr/src/app/stuff

EXPOSE 8894
RUN ["chmod", "+x", "./utils/wait-for-it.sh"]
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "index.js"  ]
