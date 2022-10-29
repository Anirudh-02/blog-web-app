function loadComponentIntoElement (href, element, loadDataInsideComponent) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', href, false)
    xhttp.send()
    document.getElementById(element).innerHTML = xhttp.responseText
}

loadComponentIntoElement('../components/navbar.html', 'navbar')
loadComponentIntoElement('../components/footer.html', 'footer')
loadComponentIntoElement('../components/createPost.html', 'create-post')
loadComponentIntoElement('../components/viewAllPosts.html', 'content')
loginIfNeeded()

function loginIfNeeded() {
    function updateUsernameInNav (user) {
        let spanUsername  = document.getElementsByClassName('nav-username')
        spanUsername[0].textContent = 'User: ' + user.username
    }
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if (!currentUser) {
        fetch('/api/users', {
            method: 'post',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) =>  response.json())
            .then((user) => {
                window.localStorage.setItem('user', JSON.stringify(user))
                currentUser = user
                console.log('registered as: ', currentUser.username);
                updateUsernameInNav(currentUser)
            })
            .catch((err) => {
                console.error(err);
            })
    }
    else {
        console.log('resuming session as: ', currentUser.username)
        updateUsernameInNav(currentUser)
    }
}