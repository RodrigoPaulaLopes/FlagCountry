FROM node:16-alpine as BUILD

WORKDIR /build

COPY ../package.json ../yarn.lock ./

RUN yarn

COPY . .

RUN yarn compile

FROM node:16-alpine

WORKDIR /api

COPY --from=BUILD ./build/package.json ./
COPY --from=BUILD ./build/yarn.lock ./
COPY --from=BUILD ./build/dist/. ./
COPY --from=BUILD ./build/.env ./

RUN yarn --prod

CMD ["yarn","start"]
