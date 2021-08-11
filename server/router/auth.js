const express = require('express');
const router = express.Router();
let mysql = require('mysql2');
const { user } = require('../db/config/networking_db_config');
let config = require('../db/config/networking_db_config');

let db = {
    login: user,
    password: 12345,
    sessionData: '7dhb437sdhjsd73gfksd76gdsf'
}

router.post('/', (req, res) => {
    res.send(JSON.stringify({
        status: true,
        sessionData: db.sessionData
    }));
});

module.exports = router;