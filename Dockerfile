# stage1 - build react app
FROM node:12.18.3-alpine3.9 as buildStage
WORKDIR /app
COPY ./package.json /app/
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm run build

FROM nginx:1.19.1-alpine
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
ENV PORT=$PORT
COPY --from=buildStage /app/dist /usr/share/nginx/html
EXPOSE ${PORT}
COPY ./nginx/nginx.conf /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
