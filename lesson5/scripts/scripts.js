
// alert('something in')

const input = document.getElementById('favchap')
const button = document.getElementById('push')
const list = document.getElementById('list')

button.addEventListener('click', function () {
    // alert(input.value)
    //make sute input isn't blank
    const different = document.createElement('li')
    different.appendChild(document.createTextNode(input.value))
    list.appendChild(different)
})

