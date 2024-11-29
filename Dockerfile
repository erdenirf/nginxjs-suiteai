FROM nginx:stable-alpine

RUN apk add nginx-module-njs

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем дополнительные файлы конфигурации (если есть)
COPY njs/ /etc/nginx/njs/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]