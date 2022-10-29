let inpNewPostTitle = document.getElementById('newPostTitle')
let inpNewPostDescription = document.getElementById('newPostDescription')
let btnCreateNewPost = document.getElementById('createNewPost')

function createNewPost() {
    let newPost = {
        userId: JSON.parse(localStorage.user).id,
        title: inpNewPostTitle.value,
        body: inpNewPostDescription.value
    }
    let options = {
        method: 'post',
        body: JSON.stringify(newPost),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    fetch('/api/posts', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

btnCreateNewPost.onclick = () => {
    createNewPost()
    document.getElementsByClassName('new-post-interface')[0].style.setProperty('height', '0')
    document.getElementsByClassName('new-post-interface')[0].style.setProperty('visibility', 'hidden')
    location.reload()
}