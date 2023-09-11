const form = document.querySelector('.search_form')
const postContainer = document.querySelector('.post_container')
const postsWrapper = document.querySelector('.posts_wrapper')
const comments = document.querySelector('.comments')
async function getPost(id) {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if(data.status >= 200 && data.status < 300){
            return data.json()
        } else {
            throw 'An error occured when fetch post'
        }
    } catch(e) {
        throw new Error(e)
    }

}

async function getPostComents(id) {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        if(data.status >= 200 && data.status < 300){
            return data.json()
        } else {
            throw 'An error occured when fetch comments'
        }
    } catch (e){
        throw new Error(e)
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const { post_id } = Object.fromEntries([...new FormData(e.target)])
    getPost(post_id).then((data) => {
        postContainer.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            <button id="show_comments" data-postid="${data.id}">show comments</button>
        `
        comments.innerHTML = ''
    }).catch((err) => {
        postContainer.innerHTML = err
    })
})

postsWrapper.addEventListener('click', (e) => {

    if (e.target.id === 'show_comments') {
        getPostComents(e.target.dataset.postid).then((data) => {
            comments.innerHTML = data.length
                ? data.reduce((acc, { name, email, body }) => {
                    return acc = acc.concat(`
                            <div class="comment">
                                <span><strong>Name: </strong>${name}</span>
                                <span><strong>Email: </strong>${email}</span>
                                <p>
                                    ${body}
                                </p>
                            </div>
                        `)
                }, '')
                : 'There are no comments for this post'
        }).catch((err) => {
            comments.innerHTML = err
        })
    }
})