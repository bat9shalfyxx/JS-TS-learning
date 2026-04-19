const axios = require("axios");

const getData = async (url = "https://jsonplaceholder.typicode.com/users") => {
    try {
        const response = await axios.get(url);
        const usersIDs = response.data.map((user) => user.id);
        return usersIDs;
    } catch (e) {
        throw e;
    }
}

module.exports = getData;