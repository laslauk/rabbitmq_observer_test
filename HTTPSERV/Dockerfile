
FROM node:10

WORKDIR /httpserv

#COPY package*.json ./

#RUN npm install

#COPY . .



COPY package.json /httpserv/

RUN npm install

# Bundle app source
COPY . /httpserv/

EXPOSE 8894
RUN ["chmod", "+x", "./utils/wait-for-it.sh"]
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "index.js"  ]
