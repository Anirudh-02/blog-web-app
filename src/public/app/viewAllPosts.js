function loadPosts() {
    fetch('/api/posts')
        .then((response) => response.json())
        .then((posts) => {
            for (post of posts) {
                htmlString = `
                    <div class="col-sm-12 col-md-8 col-lg-7 my-2">
                    <div class="card text-white bg-dark" style="width: 100%;">
                        <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">User: ${post.user.username}</h6>
                        <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                    </div>`
                htmlToAppend = new DOMParser().parseFromString(htmlString, 'text/html')
                let postsContainer = document.getElementById('posts-container')
                postsContainer.appendChild(htmlToAppend.body.firstChild)
            }
        })
}
loadPosts()