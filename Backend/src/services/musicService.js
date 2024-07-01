const Music = require("../model/Music");

const fetchAllMovies = async (query) => {
    try {
        const { title } = query;
        const fetchAllData = await Music.find(title ? { title } : {});
        return fetchAllData;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    fetchAllMovies,
}