const axios = require("axios");

const functions = {
    request: (config) => axios(config).then(res => res.data).catch(error => error.response)
}

module.exports = functions;