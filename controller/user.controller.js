const UserModel = require('../model/user.model')

const signup = async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    signup
}