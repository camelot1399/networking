const cp = require('child_process');
const fs = require('fs');
const express = require('express');
const app = express();

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
  
        responceToJson('./storage/lan_devices/response.txt');
    });
  
    s_process.on('exit', (code) => {
        console.log(`exit: ${code}`);
    });
  }
  
  function responceToJson(file) {
    // асинхронное чтение
    fs.readFile(file, "utf8", function(error,data){
        if(error) throw error;
        
        let dataJSON = [];
        let result = data.replace(/[(,),at,on,?]/g,"").trim();
        let Object = stringToJSON(result, dataJSON);
        
        console.log(result);
        console.log(Object);
        
    });
  }
  
  function stringToJSON(string, Object) {
  
    while(string.length > 1) {
        let ip = string.substr(0, string.indexOf(" "));
        string = string.substr(string.indexOf(" ")).trim();
        let macAddress = string.substr(0, string.indexOf(" "))
        
        let tmp = {
        ip: ip,
        mac: macAddress
        }
  
        string = string.substr(string.indexOf("\n")).trim();
        Object.push(tmp);
    }
  
    return Object;
  
  }
  
  spawnProcess('sh', ['./storage/lan_devices/check_devices.sh']);