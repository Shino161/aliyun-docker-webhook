const http = require('http')
const spawn = require('child_process').spawn;
const dockerPwd = process.env.PASSWORD
const dockerUsername = process.env.USERNAME
const listenPort = process.env.LISTEN_PORT

const runCMD = (cmd, args, callback) => {
  let child = spawn(cmd, args);
  let resp = "";
  child.stdout.on('data', function (buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function () { callback(resp) });
}

http.createServer((req, res) => {
  const { headers, method, url } = req;
  let body = [];
  let dockerImage
  let dockerRegistry
  let containerName
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    console.log('Gravity Wall');
    body = JSON.parse(Buffer.concat(body).toString());
    dockerImage = 'registry.' + body.repository.region + '.aliyuncs.com/' + body.repository.repo_full_name + ':' + body.push_data.tag
    containerName = body.repository.name
    dockerRegistry = 'registry.' + body.repository.region + '.aliyuncs.com'
    runCMD('sh', ['./run-docker.sh', dockerImage, containerName, dockerRegistry, dockerUsername, dockerPwd, listenPort], (text)=> { console.log(text)})
  });
  res.end('aLIEz!')
}).listen(listenPort);

