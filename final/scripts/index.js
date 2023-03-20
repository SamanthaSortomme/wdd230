


// ==========================LAST UPDATED============================

function updateDate() {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    const formatted_date = mm + '~' + dd + '~' + yyyy;
    console.log(formatted_date);

    document.querySelector('#lastModified').innerHTML = formatted_date;
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(date);
    let statement = ` Today is ${fulldateUK}`;
    document.querySelector('#lastModified').innerHTML = statement;
}
updateDate();

if (document.lastModified) {
    document.getElementById('lastModified').innerHTML =
        new Date(document.lastModified).toLocaleString();
}

//=======================LOCAL STORAGE========================
drinks = document.getElementById('totalDrinks');
const orderedDrinks = Number(window.localStorage.getItem('total-drinks'));

if (orderedDrinks !== 0) {
    if (orderedDrinks === 1) {
        drinks.innerHTML = `You have ordered ${orderedDrinks} specialty drink since your first visit (or last cache clearing)! WOOHOO!`;
    }
    else {
        drinks.innerHTML = `You have ordered a total of ${orderedDrinks} specialty drinks since your first visit (or last cache clearing).`;
    }
}
else {
    drinks.innerHTML = 'Did you know that you can order specialty fruit drinks online? Head over to the "order online" page to see our selections!';
}

