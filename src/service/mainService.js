const axios = require('axios');

function getDepartments(){
    return axios.get('localhost:3670/departments')
}

module.exports = {
    getDepartments,
}