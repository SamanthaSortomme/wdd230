let dropdown1 = document.getElementById('dropdown1');
let dropdown2 = document.getElementById('dropdown2');
let dropdown3 = document.getElementById('dropdown3');
dropdown1.length = 0;
dropdown2.length = 0;
dropdown3.length = 0;
// let dropdown = document.querySelectorAll('.dropdown');
// dropdown.length = 0;

const defaultOption1 = document.createElement('option');
const defaultOption2 = document.createElement('option');
const defaultOption3 = document.createElement('option');
defaultOption1.text = 'Choose Fruit';
defaultOption2.text = 'Choose Fruit';
defaultOption3.text = 'Choose Fruit';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

dropdown1.add(defaultOption1);
dropdown2.add(defaultOption2);
dropdown3.add(defaultOption3);
dropdown1.selectedIndex = 0;
dropdown2.selectedIndex = 0;
dropdown3.selectedIndex = 0;

const fruitFile = 'scripts/fruits.json';

async function awwFetch() {
    try {
        const response = await fetch(fruitFile);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            optionPopulate(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

awwFetch();

function optionPopulate(data) {
    let option;

    for (let i = 0; i < data.length; i++) {
        option1 = document.createElement('option');
        option2 = document.createElement('option');
        option3 = document.createElement('option');
        option1.text = data[i].name;
        option1.value = data[i].id;
        option2.text = data[i].name;
        option2.value = data[i].nutrition;
        option3.text = data[i].name;
        option3.value = data[i].nutrition;
        dropdown1.add(option1);
        dropdown2.add(option2);
        dropdown3.add(option3);
    }
}

