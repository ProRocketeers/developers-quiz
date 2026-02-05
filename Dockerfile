FROM oven/bun:1.3.4-alpine 
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .

EXPOSE 5173/tcp
CMD ["bun", "run", "server/index.ts"]