FROM nginx:1.25.5

COPY build/ /usr/share/nginx/html
COPY containers/nginx.conf /etc/nginx/nginx.conf
