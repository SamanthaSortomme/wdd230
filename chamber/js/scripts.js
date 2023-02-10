function updateDate() {
    let date = new Date();
    console.log(date.getDate());
    // 01~26~2023;
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    //formatted current date
    const formatted_date = mm + '~' + dd + '~' + yyyy;
    console.log(formatted_date);

    //Write to HTML element
    document.querySelector('#date').innerHTML = formatted_date;
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(date);
    let statement = ` Today is ${fulldateUK}`;
    document.querySelector('#date').innerHTML = statement;
}
updateDate();
// hamburger menu
function toggleMenu() {
    document.getElementsByClassName('menu')[0].classList.toggle('responsive')
}


document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

if (document.lastModified) {
    document.getElementById('lastModified').innerHTML =
        new Date(document.lastModified).toLocaleString();
}

