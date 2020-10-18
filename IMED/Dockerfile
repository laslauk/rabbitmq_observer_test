
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "index.js"  ]
