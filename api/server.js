const http = require("http");

const requestListener = (request, response) => {
    response.statusCode = 200;
    response.end("Client");
};

const host = "localhost";
const port = 3000;

const server = http.createServer(requestListener);
server.listen(port, host, () =>
    console.log(`Server running on port: http://localhost:${host}:${port}!`)
);
