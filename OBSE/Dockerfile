
FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY ./package.json .
#COPY package*.json ./

RUN npm install

#COPY . .
RUN ["chmod", "+x", "/usr/src/app/utils/wait-for-it.sh"]
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "obse.js"  ]
