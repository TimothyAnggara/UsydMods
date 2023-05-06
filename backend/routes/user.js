const router = require('express').Router()

const {signupUser, loginUser} = require('../controller/userController')
//Test Router
router.get('/', (req,res) => {
    res.send("Hello World")
})

//Login Router
router.post('/login', loginUser)

//Signup Router
router.post('/signup', signupUser)

module.exports = router