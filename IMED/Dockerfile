
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
RUN ["chmod", "+x", "/usr/src/app/utils/wait-for-it.sh"]
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "index.js"  ]
