const express = require('express');
const router = express.Router();

router.get('/Test', (req, res) => {
    res.send("Hello how are you")
});

module.exports = router;