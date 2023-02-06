
// alert('something in')

const input = document.getElementById('favchap')
const button = document.getElementById('push')
const list = document.getElementById('list')

button.addEventListener('click', function () {
    if (input.value.trim() === "") {
        return;
    }
    // if (input.value !=='')
    const myItem = input.value;
    input.value = '';

    const different = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    different.appendChild(listText);
    listText.textContent = myItem;
    different.appendChild(listBtn);
    listBtn.textContent = "\u274C";
    list.appendChild(different);

    listBtn.addEventListener('click', () => {
        list.removeChild(different);
    });

    input.focus();

})


