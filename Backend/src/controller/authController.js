const authService = require("../services/authService");


const registerController = async(req,res) => {

    try {

        const requestPayload = req.body;

        const registerData = await authService.register(requestPayload);

        res.status(201).json({
            message: "User registered Successfully",
            userId: registerData._id
        })

    }catch (error) {

        res.status(500).json({
            message: error.message
        })
    }

}

const loginController = async (req, res) => {
    try {
        const userPayload = req.body;

        const { token, userData } = await authService.login(userPayload);

        res.status(200).json({
            message: "User logged in successfully",
            token,
            userData
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports = {
    registerController,
    loginController
}