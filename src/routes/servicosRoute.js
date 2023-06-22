'use strict'

const express = require('express');
const router = express.Router();

router.get('', (request, response) => {
  response.json({
    message:'Nossos Serviços',
    status: 'ok',
  });
});

module.exports = router;