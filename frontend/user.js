console.log('loadedfuckyou')

const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)
const id = queryParams.get('id')

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(user => {
        const $showUserSection = document.createElement('section')
        $showUserSection.innerHTML = `
            <h1>Username: <em>${user.username}</em></h1>
            <h1>Password: <em>${user.password}</em></h1>
        `
        document.querySelector('body').append($showUserSection)
    })


const adviceContainer = document.querySelector('.user-container')

fetch('http://localhost:3000/advice')
    .then(response => response.json())
    .then(advice => {
        console.log(advice)
            
        advice.forEach(advice => {
            const adviceCard = document.createElement('div')
            adviceCard.classList.add('advice-card')

            const adviceQuote = document.createElement('h2')
            adviceQuote.classList.add('advice-quote')
            adviceQuote.textContent = advice.quote

            adviceCard.append(adviceName)
            adviceContainer.append(adviceCard)
        })
    })
