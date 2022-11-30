const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const getData = require('../server/data');

server.get('/api/data', (req, res, next) => {
  res.status(200).send(getData.getData);
});

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});
