FROM nginx:stable-alpine

RUN apk add nginx-module-njs

# Копируем конфигурации nginx
COPY src/. /etc/nginx/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]