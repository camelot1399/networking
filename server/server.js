const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8082;
const cp = require('child_process');

app.get('/testServer', (req, res) => {
  res.send(JSON.stringify({
    "status": true
  }));
})

// let child = cp.exec('./storage/lan_devices/check_devices.sh', function(err, stdout, stderr) {
//   console.log(stdout);
// });

// let child = cp.spawn('./storage/lan_devices/check_devices.sh', [args]);

// child.stdout.on('data', function(data) {
//   console.log(data);
// });

// const bat = cp.spawn('check_devices.sh', '/storage/lan_devices');

function spawnProcess(command, args) {
  let s_process = cp.spawn(command, args);

  let fullData = '';
  let dataChunks = 0;

  s_process.stdout.on('data', (data) => {
    fullData += data;
    dataChunks += 1;
    console.log(`stdout: ${data}`);
  });
  
  s_process.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  s_process.stdout.on('end', () => {
    console.log(`fullData: ${fullData}`);
    console.log(`dataChunks: ${dataChunks}`);
  });
  
  s_process.on('exit', (code) => {
    console.log(`exit: ${code}`);
  });
}

spawnProcess('sh', ['storage/lan_devices/check_devices.sh']);




// cp.exec('/storage/lan_devices/check_devices.sh', function(err, stdout, stderr) {
//   console.log(stdout);
// });

// bat.stdout.on('data', (data) => {
//   console.log(data.toString());
// });

// bat.stderr.on('data', (data) => {
//   console.error(data.toString());
// });

// bat.on('exit', (code) => {
//   console.log(`Child exited with code ${code}`);
// });

app.listen(port, () => {
  console.log(`Listening ${port} port`);
});