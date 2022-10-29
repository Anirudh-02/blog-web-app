const route = require('express').Router()
const {
    createNewPost,
    findAllPosts
} = require('../../controllers/posts')

route.get('/', async (req, res) => {
    const post = await findAllPosts()
    res.status(200).send(post)
})

route.post('/', async (req, res) => {
    const {userId, title, body} = req.body
    if(!userId || !title || !body) {
        return res.status(400).send({
            error: 'Need user ID, title and body to create post'
        })
    }
    const post = await createNewPost(userId, title, body)
    res.status(201).send(post)
})

module.exports = {
    postRoute: route
}