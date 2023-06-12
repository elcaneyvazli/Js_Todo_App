const form = document.querySelector('.form');
const input = document.querySelector('.formInput');
const btnAdd = document.querySelector('.formBtn')
const ul = document.querySelector('.listUl')
const search = document.querySelector('.searchInput')

btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    const li = `
    <li class ='listLi'>
        <p>${input.value}</p> 
        <button class='btnDelete'>Delete</button>
    </li>`
    if (input.value.trim() !== '') {
        ul.innerHTML += li
        input.value = ''
    } else {
        alert('Please enter a value')
    }

    ul.addEventListener("click", (e) => {
        if (e.target.classList.contains('btnDelete')) {
            e.target.parentElement.remove();
        }
    })
})

search.addEventListener('keyup', (e) => {
    e.preventDefault()
    const text = e.target.value.toLowerCase()
    const list = ul.getElementsByTagName('li')
    Array.from(list).forEach((li) => {
        const item = li.firstElementChild.textContent
        if (item.toLowerCase().indexOf(text) != -1) {
            li.style.display = 'flex'
        } else {
            li.style.display = 'none'
        }
    })
})
