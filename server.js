'use strict';
const os = require('os');
const uuid = require('uuid');
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
    const requestId = uuid.v4();
    const hostname = os.hostname();
    reply.headers({'x-request-id': requestId});
    request.log.info({hostname, requestId}, 'handling a new request');
    return { code: 0, message: 'ok', hostname, requestId }
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
