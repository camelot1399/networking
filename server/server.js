const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8082

app.get('/testServer', (req, res) => {
  res.send(JSON.stringify({
    "status": true
  }));
})


app.listen(port, () => {
  console.log(`Listening ${port} port`);
});