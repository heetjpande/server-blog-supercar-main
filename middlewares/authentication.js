const { verify } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.access_token 
        const payload = verify(token)
        const foundUser = await User.findOne({
            where: {
                id: payload.id,
                email: payload.email
            }
        })
        req.user = {
            id: foundUser.id,
            username: foundUser.username,
            email: foundUser.email,
        }
        next()
    } catch (err) {
        res.status(401).json( { message: "Unauthorized" } )
        
    }
}

module.exports = authentication