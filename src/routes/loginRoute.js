'use strict'

const express = require('express');
const router = express.Router();

router.get('', (request, response) => {
  response.json({
    message:'Pagina de Login',
    status: 'ok',
  });
});

module.exports = router;