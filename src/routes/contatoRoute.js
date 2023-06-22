'use strict'

const express = require('express');
const router = express.Router();

router.get('', (request, response) => {
  response.json({
    message:'Pagina de contato',
    status: 'ok',
  });
});

module.exports = router;