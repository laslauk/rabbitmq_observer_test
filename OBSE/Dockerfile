
FROM node:10

# Create app directory
WORKDIR /usr/src/app


COPY package.json /usr/src/app/

RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN ["chmod", "+x", "./utils/wait-for-it.sh"]
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "obse.js"  ]
