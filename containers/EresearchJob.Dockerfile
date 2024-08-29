FROM nginxinc/nginx-unprivileged:mainline

COPY --chown=nginx:nginx containers/default.conf.template /etc/nginx/templates/default.conf.template

COPY --chown=nginx:nginx build/ /usr/share/nginx/html

ENV ALLOWED_DOMAINS="localhost"