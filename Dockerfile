FROM nginx:stable-alpine
RUN apk add --no-cache git
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]