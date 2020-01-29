const axios = require("axios");

function getDepartments() {
  return axios.get("http://172.26.104.241:3670/departments");
}

module.exports = {
  getDepartments
};
