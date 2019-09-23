# aliyun-docker-webhook
🍬Pull docker image from AliYun docker registry and Run!

## How to use
1. install node.js and pm2 globally (it's easy 😊)
2. `git clone https://github.com/Shino161/aliyun-docker-webhook.git` && cd `aliyun-docker-webhook`
3. modify the pm2.config.json, just modify `env` option
```js
"env": {
  "DOCKER_EXPOSE":"80:80",
  "LISTEN_PORT": "listen_port",
  "PASSWORD": "password",
  "USERNAME": "username"
}
```
4. input ur aliYun docker registered username and password.
5. If u dont have Nginx to proxy request, u can set port to 80.For example  
```js
"env": {
  "DOCKER_EXPOSE":"80:80",
  "LISTEN_PORT": "80",
  "PASSWORD": "123456",
  "USERNAME": "aliyun"
}
```
6. run `npm run start`, it's done

## At last
📧If you have any questions, u can submit any ideas as GitHub issues.
