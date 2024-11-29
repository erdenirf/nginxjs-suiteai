# nginxjs-suiteai

## Quick start with docker *./Dockerfile*

### build docker image

```bash
docker build -t erdenirf/nginxjs-suiteai .
```

### stop running container

```bash
docker stop nginxjs-suiteai
```

### delete container

```bash
docker rm nginxjs-suiteai
```

### run container

```bash
docker run -d -p 10594:80 --name nginxjs-suiteai erdenirf/nginxjs-suiteai
```

## Quick start with docker-compose *./docker-compose.yml*

### build docker image

```bash
docker build -t erdenirf/nginxjs-suiteai .
```

### stop running docker-compose

```bash
docker compose down
```

### run docker-compose

```bash
docker compose up -d
```