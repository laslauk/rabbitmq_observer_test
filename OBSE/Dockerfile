
FROM node:10

# Create app directory
WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "obse.js"  ]
