https://bun.sh/guides/ecosystem/docker

```
docker build --pull -t bun-hello-world .

docker run -d -p 3000:3000 --name bun-hello-world bun-hello-world

docker stop bun-hello-world

docker rm bun-hello-world
```