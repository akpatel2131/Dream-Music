const musicService = require("../services/musicService");

const getAllMusic = async (req, res) => {
    try {

        const query = req.query;

        const fetchedData = await musicService.fetchAllMovies(query);

        res.status(200).json(fetchedData);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}



module.exports = {
    getAllMusic,
}

