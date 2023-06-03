# 의존성 빌드 단계
FROM node:16-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --production

# 앱 빌드 단계
FROM node:16-alpine AS builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build

# 최종 단계
FROM node:16-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 8080

CMD ["npm", "start"]
