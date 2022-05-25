##############################################
FROM node:16 as builder

WORKDIR /usr/src/app

RUN npm i -g npm 

COPY . .
RUN npm ci --only=production

ENTRYPOINT ["/sbin/tini", "--"]

##############################################
# Running image
FROM node:16.13-stretch-slim

ENV PORT '3000'
ENV HOST '0.0.0.0'
USER node
EXPOSE $PORT
COPY --from=builder /usr/src/app .

CMD ["node", "server.js"]
