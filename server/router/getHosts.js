const express = require('express');
const router = express.Router();
let mysql = require('mysql2');
let config = require('../db/config/networking_db_config');

router.get('/', (req, res) => {
    let conn = mysql.createConnection(config);

        let query = `SELECT ip, mac FROM hosts`;
        conn.query(query, (err, result) => {
            if (err) {
                console.log(`error: ${err}`);
            } else {
                res.send(result);
            }
        });

        conn.end(err => {
            if (err) {
                console.log(err);
                return err;
            } else {
                console.log('conn close');
            }
        });
});

module.exports = router;