FROM node:12.18.3-alpine as base

FROM base as builder

# deps for post-install scripts
RUN apk add --update --no-cache \
    python \
    make \
    git \
    g++

WORKDIR /usr/src/app

COPY package.json ./

# npm rebuild bcrypt --update-binary
# RUN npm install --only=production && npm rebuild bcrypt --build-from-source && NODE_ENV=development npm run build
RUN yarn install

FROM base

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY . .

ARG NODE_ENV=development 
ENV NODE_ENV=${NODE_ENV}

RUN yarn build && yarn build:docs

EXPOSE 30041 30042



CMD [ "node", "dist/start.js" ]