'use strict'

const express = require('express');
const router = express.Router();

router.get('', (request, response) => {
  response.json({
    message:'API de Gerenciamento de condominio',
    status: 'ok',
  });
});

module.exports = router;