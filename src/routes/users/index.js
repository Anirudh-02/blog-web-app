const route = require('express').Router()
const {
    createAnonUser,
    getUserById,
    getUserByUsername
} = require('../../controllers/users')

route.get('/:id', async (req, res) => {
    let user;
    if (isNaN(parseInt(req.params.id))) {
        user = await getUserByUsername(req.params.id)
    } else {
        user = await getUserById(req.params.id)
    }
    if (user) {
        res.status(200).send(user)
    } else {
        res.status(404).send({
            error: 'no such userId or username found'
        })
    }
})

route.post('/', async (req, res) => {
    const user = await createAnonUser()
    res.status(201).send(user)
})

module.exports = {
    userRoute: route
}