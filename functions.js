const axios = require("axios");

const functions = {
    request: (config) => axios(config).then(res => res.data)
}

module.exports = functions;