const express = require('express');
const router = express.Router();

const meController = require('../app/controller/meController');

router.get('/stored/vlog', meController.storedVlog);

module.exports = router;
