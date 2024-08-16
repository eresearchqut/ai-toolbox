FROM nginx:1.27.1

COPY containers/default.conf.template /etc/nginx/templates/default.conf.template

COPY build/ /usr/share/nginx/html

ENV ALLOWED_DOMAINS="localhost"