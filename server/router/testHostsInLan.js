const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    console.log('test hosts');

})

module.exports = router;