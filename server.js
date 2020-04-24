const express = require('express');
const project = require('./package.json')
const app = express();

app.use(express.static(`./dist/${project.name}`))

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(forceSSL());

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: `dist/${project.name}`})
})

app.listen(process.env.PORT || 8080);
