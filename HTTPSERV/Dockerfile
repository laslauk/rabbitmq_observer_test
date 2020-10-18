
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "index.js"  ]
