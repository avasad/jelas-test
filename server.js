'use strict';
const os = require('os');
const uuid = require('uuid');
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
    const requestId = uuid.v4();
    const hostname = os.hostname();
    const nets = os.networkInterfaces();
    const addresses = Object.keys(nets).flatMap(k => nets[k].filter(({family}) => family !== 'IPv6').map(({address}) => ({address})));
    reply.headers({'x-request-id': requestId});
    request.log.info({hostname, requestId}, 'handling a new request');
    return { code: 0, message: 'ok', hostname, requestId, addresses }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3040, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
