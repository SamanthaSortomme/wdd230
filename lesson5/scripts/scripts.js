
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

});




// =========== NUMBER OF VISITS FROM CHAMBER

const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent =
        `This is visit number ${numVisits} for you`;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);


const closevisits = document.getElementById('closevisits')
closevisits.addEventListener('click', function (e) {
    console.log('button was clicked')
})

document.getElementById('closevisits').onclick = function () {
    this.parentNode.remove();
}


