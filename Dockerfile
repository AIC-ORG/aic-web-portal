FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3231

ENV  NODE_ENV=production \
    PORT=3231 \
    NEXT_PUBLIC_API_URL=https://aic-backend.onrender.com/api/v1 \
    SANITY_SECRET_TOKEN=skWt5s6xRcBlqsjSqn47vc7zC7NYnF0UYmugB1CaF8vniXPjcQdUA94SI5Wp0MlAIru7fCLyJecLYvyIYV67BfmjOU4PStSA9TLx8uu5eOL9tWGPCnugPcpfmTctEjewmHgNEAdMOXj0fYzd21gNCvHyBaFvcNRia3UINDcxu3qTn34mP47i

CMD ["node", "server.js"]
