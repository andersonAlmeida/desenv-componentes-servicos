const http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const helloWorldProxy = httpProxy('http://localhost:3001');
const helloEverybodyProxy = httpProxy('http://localhost:3002');

// Proxy request
app.get('/hello-world', (req, res, next) => {
  helloWorldProxy(req, res, next);
})

app.get('/hello-everybody', (req, res, next) => {
  helloEverybodyProxy(req, res, next);
})

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const server = http.createServer(app);
server.listen(3000);