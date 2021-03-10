console.log('dfoighdfg')

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(user => {
        const $showUserSection = document.createElement('section')
        $showUserSection.innerHTML = `
            <h1>Welcome, ${user.username}. Do you need some advice today?</h1>
        `
        document.querySelector('body').append($showUserSection)
    })

    