const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv').config();
const staticFiles = express.static(path.join(__dirname, '../../client/build'));/* Added to serve up react project; get reference to the client build directory */
const { createProxyMiddleware } = require("http-proxy-middleware");

const apiRouter = require("./routes/users");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  createProxyMiddleware("/api", {
    target: "http://localhost:3001",
    pathRewrite: {
      "^/api": "/"
    },
    changeOrigin: true
  })
);


app.use("/", apiRouter);
app.use(staticFiles);

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
})

module.exports = app;