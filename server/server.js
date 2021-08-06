const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8082;

const testServer = require('./router/testServer');
const testHostsInLan = require('./router/testHostsInLan');

app.use('/testServer', testServer);
app.use('/testHostsInLan', testHostsInLan);

app.listen(port, (request, response) => {
  console.log(`Listening ${port} port`);
});