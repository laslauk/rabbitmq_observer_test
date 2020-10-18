
FROM node:10

# Create app directory
WORKDIR /usr/src/app


COPY package*.json /usr/src/app/ 

RUN npm install

COPY . /usr/src/app/ 
RUN ["chmod", "+x", "/usr/src/app/utils/wait-for-it.sh"]
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "obse.js"  ]
