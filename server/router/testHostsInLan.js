const express = require('express');
const cp = require('child_process');
const fs = require('fs');

const router = express.Router();
let mysql = require('mysql2');
let config = require('../db/config/networking_db_config');

router.get('/', (req, res) => {

    function searchAllHosts() {
        spawnProcess('sh', ['./storage/lan_devices/check_devices.sh']);
    }

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
            let result = data.replace(/[(,)\at\on\[?]/gm,"").trim();
            let Object = stringToJSON(result, dataJSON);

            addToMysql(Object);
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

    function addToMysql(json) {

        let conn = mysql.createConnection(config);

        conn.connect(err => {
            if (err) {
                console.log(err)
                return err
            } else {
                console.log('Catalog Database ok')
            }
        });

        let query = `SELECT ip, mac FROM hosts`;

        conn.query(query, (err, result) => {
            if (err) {
                console.log(err);
                return
            } else {
                let listFromDB = JSON.stringify(result);

                json.forEach(el => {
                    if (!listFromDB.includes(el.mac)) {
                        pushHost(el);
                    }
                });
            }
        });

        conn.end(err => {
            if (err) {
                console.log(err);
                return err;
            } else {
                console.log('Catalog Database close');
            }
        });
        
    }

    function pushHost(el) {
        let conn2 = mysql.createConnection(config);

        console.log('mac false, заливаю в бд');
        
        try {
            let query2 = `INSERT INTO hosts (ip, mac) VALUES (?, ?)`;
            conn2.query(query2, [el.ip, el.mac], (err2, result2) => {
                if (err2) {
                    console.log(`error: ${err2}`);
                } else {
                    console.log(`ip: ${el.ip}, mac: ${el.mac} успешно загружен в BD`);
                }
            });
        } catch(e) {
            throw e;
        }

        conn2.end(err => {
            if (err) {
                console.log(err);
                return err;
            } else {
                console.log('conn2 close');
            }
        });
    }

    searchAllHosts();

})

module.exports = router;