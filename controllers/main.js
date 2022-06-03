const {BadRequestError} = require('../errors/index')
const jwt = require('jsonwebtoken')


const login = async(req,res) => {
    const {username,password} = req.body
    console.log(username,password)
    if (!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    // just for demmo, normally provided by DB!!!
const id = new Date().getDate()
const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn:'30d'})
console.log(id)
    res.status(200).json({msg:'user created',token})
}


const dashboard = async (req, res) => {
   console.log(req.user)
    const luckyNumber = Math.floor(Math.random()*100);
        
        res.status(200).json({msg:`Hello, ${req.user.username}`, secret:`Here is your luckyNumber ${luckyNumber}`})
}

module.exports = {login,dashboard}