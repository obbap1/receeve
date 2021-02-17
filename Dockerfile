FROM amazon/aws-lambda-nodejs:12

COPY package*.json ./

RUN npm install

COPY index.ts ./

RUN npm run build

ENV AWS_ACCESS_KEY_ID=""

ENV AWS_SECRET_ACCESS_KEY=""

CMD [ "index.handler" ]

