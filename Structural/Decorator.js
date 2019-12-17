class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }
  get url() {
    return `https://${this.ip}:${this.port}`
  }
}
function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url
  }
  return server;
}
function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}
const server1 = aws(new Server('12.34.56.78', 8080));
console.log(server1.isAWS);
console.log(server1.awsInfo())
const server2 = azure(new Server('98.87.65.43', 1000))
console.log(server2.isAzure)
console.log(server2.url)