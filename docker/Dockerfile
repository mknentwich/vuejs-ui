FROM --platform=$BUILDPLATFORM node:16-alpine AS build

WORKDIR /app

COPY package.json /app/package.json
COPY . /app

RUN --mount=type=cache,target=/app/node_modules \
    yarn install && \
    yarn build

FROM --platform=$TARGETPLATFORM nginx:alpine

COPY --from=build /app/dist /mknentwich-ui
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
