FROM node:lts-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM node:lts-alpine

RUN mkdir -p /app
WORKDIR /app

COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN yarn add global next

EXPOSE 3000

CMD yarn start
