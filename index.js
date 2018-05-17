'use strict'

const Hapi = require('hapi')

const server = Hapi.server({
    host: '0.0.0.0',
    port: 8002
})

const init = async () => {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

init()