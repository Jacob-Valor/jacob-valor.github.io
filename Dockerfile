FROM oven/bun:1-slim AS builder
WORKDIR /usr/src/app
COPY package.json .
COPY bun.lock* .
RUN bun install --frozen-lockfile

FROM oven/bun:1-slim
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/ /usr/src/app/
COPY . .
CMD ["bun", "quartz", "build", "--serve"]
