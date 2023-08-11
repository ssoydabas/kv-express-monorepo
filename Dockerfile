FROM node:18-alpine AS development

ENV NODE_ENV=development

WORKDIR /app

COPY package*.json .
RUN npm ci

# install @kv-express/mongodb
COPY packages/modules/mongodb/package.json ./packages/modules/mongodb/
RUN npm ci --workspace @kv-express/mongodb

# build @kv-express/mongodb
COPY packages/modules/mongodb ./packages/modules/mongodb
RUN npm run build --workspace @kv-express/mongodb

# install @kv-express/mailing
COPY packages/modules/mailing/package.json ./packages/modules/mailing/
RUN npm ci --workspace @kv-express/mailing

# build @kv-express/mailing
COPY packages/modules/mailing ./packages/modules/mailing
RUN npm run build --workspace @kv-express/mailing

# install @kv-express/api
COPY packages/apps/api/package.json ./packages/apps/api/
RUN npm ci --workspace @kv-express/api

# copy @kv-express/api source
COPY packages/apps/api ./packages/apps/api/

CMD ["npm", "run", "dev", "--workspace", "@kv-express/api"]

FROM development AS builder

# build @kv-express/api
RUN npm run build --workspace @kv-express/api

FROM node:18-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/packages/apps/api/package.json ./packages/apps/api/package.json
COPY --from=builder /app/packages/apps/api/dist ./packages/apps/api/dist

COPY --from=builder /app/packages/modules/mongodb/package.json ./packages/modules/mongodb/package.json
COPY --from=builder /app/packages/modules/mongodb/dist ./packages/modules/mongodb/dist

COPY --from=builder /app/packages/modules/mailing/package.json ./packages/modules/mailing/package.json
COPY --from=builder /app/packages/modules/mailing/dist ./packages/modules/mailing/dist

CMD ["npm", "start", "--workspace", "@kv-express/api"]
