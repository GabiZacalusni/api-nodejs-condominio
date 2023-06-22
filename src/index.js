'use strict'
const express = require('express');
const api = express();
const PORT = 3000;
require('./database').connect();

//registrando rotas
const infoRoute = require('./routes/infoRoute');
api.use('/info', infoRoute);

const cadastroRoute = require('./routes/cadastroRoute');
api.use('/cadastro', cadastroRoute);

const contatoRoute = require('./routes/contatoRoute');
api.use('/contato', contatoRoute);

const loginRoute = require('./routes/loginRoute');
api.use('/login', loginRoute);

const servicosRoute = require('./routes/servicosRoute');
api.use('/servicos', servicosRoute);




api.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));