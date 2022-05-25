'use strict';
const uuid = require('uuid');
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
    reply.headers({'x-request-id': uuid.v4()});
    return { code: 0, message: 'ok' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3040)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
