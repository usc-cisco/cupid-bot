FROM oven/bun:1.2-alpine

WORKDIR /usr/src/app

COPY package.json bun.lock ./
RUN bun i

COPY . .

ENTRYPOINT [ "bun", "run", "start" ]
