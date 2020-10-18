
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8894
RUN ["chmod", "+x", "./utils/wait-for-it.sh"]
ENTRYPOINT ["/bin/bash"]
CMD [ "node", "index.js"  ]
