
FROM node:10

#WORKDIR /usr/src/app
WORKDIR /app
#COPY package*.json ./

#RUN npm install

#COPY . .



#COPY package.json /usr/src/app/
COPY package.json /app
RUN npm install

# Bundle app source
#COPY . /usr/src/app
COPY . /app
EXPOSE 8894
RUN ["chmod", "+x", "./utils/wait-for-it.sh"]
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "index.js"  ]
