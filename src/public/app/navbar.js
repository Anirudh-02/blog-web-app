window.onload = () => {
    let navlinks = document.getElementsByClassName('nav-link')
    let btnLogout = document.getElementById('logout')
    btnLogout.addEventListener('click', () => {
        localStorage.clear()
        location.reload()
    })
    for (navlink of navlinks) {
        navlink.addEventListener('click', (event) => {
            let component = event.target.getAttribute('data-component')
            if (component == 'viewAllPosts') {
                loadComponentIntoElement(`../components/${component}.html`, 'content')
                loadPosts()
            }
            if (component == 'createPost') {
                console.log(document.getElementsByClassName('new-post-interface')[0]);
                document.getElementsByClassName('new-post-interface')[0].style.setProperty('height', 'auto')
                document.getElementsByClassName('new-post-interface')[0].style.setProperty('visibility', 'visible')
            }
            if (component == 'myPosts') {
                loadComponentIntoElement(`../components/${component}.html`, 'content')
                loadMyPosts()
            }
        })
    }
}