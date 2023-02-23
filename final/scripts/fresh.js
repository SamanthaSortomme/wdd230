const fruitFile = 'scripts/fruits.json';

const fname = document.getElementById('fname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const instruct = document.getElementById('instruction');
const button = document.getElementById('push');
const list = document.getElementById('nutrition');

//can clone dom abject look into it

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
defaultOption1.value = 0;
defaultOption2.value = 0;
defaultOption3.value = 0;
// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

dropdown1.add(defaultOption1);
dropdown2.add(defaultOption2);
dropdown3.add(defaultOption3);

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
};
//submit changed to button
//submitbtn changed to push
order.addEventListener('submit', function () {
    if (dropdown1.value !== "0" && fname.value !== '' && email.value !== '' && phone.value !== '') {
        document.getElementById('nutrition').innerHTML = '';
        let totals = getTotal();
        populateResult(totals);
        storeTotalDrinks();
        document.getElementById('order').reset();
    }
});

function getTotal() {
    const fruit1 = JSON.parse(dropdown1.value);
    const fruit2 = JSON.parse(dropdown2.value);
    const fruit3 = JSON.parse(dropdown3.value);
    total = {};

    if (fruit2 == 0 && fruit3 == 0) {
        total.carbs = fruit1.carbohydrates;
        total.protein = fruit1.protein;
        total.fat = fruit1.fat;
        total.calories = fruit1.calories;
        total.sugar = fruit1.sugar;
    }
    else if (fruit2 == 0) {
        total.carbs = fruit1.carbohydrates + fruit3.carbohydrates;
        total.protein = fruit1.protein + fruit3.protein;
        total.fat = fruit1.fat + fruit3.fat;
        total.calories = fruit1.calories + fruit3.calories;
        total.sugar = fruit1.sugar + fruit3.sugar;
    }
    else if (fruit3 == 0) {
        total.carbs = fruit1.carbohydrates + fruit2.carbohydrates;
        total.protein = fruit1.protein + fruit2.protein;
        total.fat = fruit1.fat + fruit2.fat;
        total.calories = fruit1.calories + fruit2.calories;
        total.sugar = fruit1.sugar + fruit2.sugar;
    }
    else {
        total.carbs = fruit1.carbohydrates + fruit2.carbohydrates + fruit3.carbohydrates;
        total.protein = fruit1.protein + fruit2.protein + fruit3.protein;
        total.fat = fruit1.fat + fruit2.fat + fruit3.fat;
        total.calories = fruit1.calories + fruit2.calories + fruit3.calories;
        total.sugar = fruit1.sugar + fruit2.sugar + fruit3.sugar;
    }
    return total;
}

function populateResult(nutritionTotals) {
    let date = getDate();
    makeListItem('First Name', fname.value);
    makeListItem('Email', email.value);
    makeListItem('Phone Number', phone.value);
    makeListItem('order date', date)
    makeListItem('First Fruit', dropdown1.selectedOptions[0].text);
    if (dropdown2.value != 0) {
        makeListItem('Second Fruit', dropdown2.selectedOptions[0].text);
    }
    else {
        makeListItem('Second Fruit', 'None');
    }
    if (dropdown3.value != 0) {
        makeListItem('Third Fruit', dropdown3.selectedOptions[0].text);
    }
    else {
        makeListItem('Third Fruit', 'None');
    }
    makeListItem('Nutritional Facts', '')
    makeListItem('carbohydrates', nutritionTotals.carbs.toFixed(2))
    makeListItem('protein', nutritionTotals.protein.toFixed(2))
    makeListItem('fat', nutritionTotals.fat.toFixed(2))
    makeListItem('calories', nutritionTotals.calories.toFixed(2))
    makeListItem('Sugar', nutritionTotals.sugar.toFixed(2))
    makeListItem('Special instructions', instruct.value)
}

function getDate() {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    const formatted_date = mm + '~' + dd + '~' + yyyy;
    console.log(formatted_date);
    return formatted_date;
}

function makeListItem(key, value) {
    const element = document.createElement('li');
    const text = document.createElement('span');
    text.textContent = key + ': ' + value;
    element.appendChild(text);
    list.appendChild(element);
}

function storeTotalDrinks() {
    let numDrinks = window.localStorage.getItem('total-drinks');
    numDrinks++;
    localStorage.setItem('total-drinks', numDrinks);
}



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




