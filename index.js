'use strict'
const Hapi = require('hapi')
const mecab = require('mecab-ffi')

const server = Hapi.server({
    host: '0.0.0.0',
    port: 8002
})

server.route({
    method: 'GET',
    path: '/{text}',
    handler: (req, h) => {
        return getParse(encodeURIComponent(req.params.text))
    }
})

async function getParse(text) {  
    let result = await mecab.parse(text, (err, body) => {
        return body
    })
    return result
}


const init = async () => {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

init()