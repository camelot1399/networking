const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8082;

const testServer = require('./router/testServer');
const testHostsInLan = require('./router/testHostsInLan');
const getHosts = require('./router/getHosts');
const auth = require('./router/auth');

app.use('/testServer', testServer);
app.use('/testHostsInLan', testHostsInLan);
app.use('/getHosts', getHosts);
app.use('/auth', auth);

app.listen(port, (request, response) => {
  console.log(`Listening ${port} port`);
});