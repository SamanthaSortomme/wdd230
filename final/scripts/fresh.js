const submit = document.getElementById('submitBtn')


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
    let option1;
    let option2;
    let option3;

    for (let i = 0; i < data.length; i++) {
        option1 = document.createElement('option');
        option2 = document.createElement('option');
        option3 = document.createElement('option');
        option1.text = data[i].name;
        option1.value = JSON.stringify(data[i].nutritions);
        option2.text = data[i].name;
        option2.value = JSON.stringify(data[i].nutritions);
        option3.text = data[i].name;
        option3.value = JSON.stringify(data[i].nutritions);
        dropdown1.add(option1);
        dropdown2.add(option2);
        dropdown3.add(option3);
    }
}

submit.addEventListener('click', () => {
    console.log('calculating nutrition');
    const fruit1 = JSON.parse(dropdown1.value);
    const fruit2 = JSON.parse(dropdown2.value);
    const fruit3 = JSON.parse(dropdown3.value);
    let totalCarbs = fruit1.carbohydrates + fruit2.carbohydrates + fruit3.carbohydrates;
    let totalProtein = fruit1.protein + fruit2.protein + fruit3.protein;
    let totalFat = fruit1.fat + fruit2.fat + fruit3.fat;
    let totalCalories = fruit1.calories + fruit2.calories + fruit3.calories;
    let totalSugar = fruit1.sugar + fruit2.sugar + fruit3.sugar;
    console.log(totalCarbs + '\n' + totalProtein + '\n' + totalFat + '\n' + totalCalories + '\n' + totalSugar)
    // const totallyNotABallon = 
});


// function newTrishInn() {
//     const fruit1 = dropdown1.value;
//     // const fruit2 = dropdown2.value
//     // const fruit3 = dropdown3.value
//     console.log(fruit1);
// }

// function getOption() {
//     selectElement = document.querySelector('#select1');
//     output = selectElement.options[selectElement.selectedIndex].value;
//     document.querySelector('.output').textContent = output;
// }