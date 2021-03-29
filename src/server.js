const express = require("express");
const server = express();

server.get('/', (request, response) => {
  return response.send('entrou');
})

server.listen(3000);