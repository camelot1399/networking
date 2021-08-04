const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 8082
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});