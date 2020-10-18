
FROM node:10


WORKDIR /usr/src/app


#OPY package*.json ./

#RUN npm install

#COPY . .

COPY package.json /usr/src/app/

RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN ["chmod", "+x", "./utils/wait-for-it.sh]
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "main.js"  ]
