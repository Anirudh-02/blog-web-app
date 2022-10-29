const { Posts, Users } = require('../db/model')

async function createNewPost (userid, title, body) {
    const post = await Posts.create({
        title: title,
        body: body,
        userId: userid
    })
    return post
}

// showAllPosts({username: ''})
// showAllPosts({title: ''})

async function findAllPosts (query) {
    // TODO: Handle query params
    const posts = await Posts.findAll({
        include: [Users],
        order: [
            ['id', 'DESC']
        ]
    })
    return posts
}

module.exports = {
    createNewPost, findAllPosts
}

//Test code

/* async function task() {
    // console.log(await createNewPost(1, 'this is a sample post', 'body of the sample post'));
    const posts = await showAllPosts()
    for (let p of posts) {
        console.log(p.title, '-------body:', p.body, '-------author:', p.user.username);
    }
}

task() */