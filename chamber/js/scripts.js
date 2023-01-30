function updateDate() {
    let date = new Date();
    console.log(date.getDate());
    // 01~26~2023;
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
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

// for dynamic year in footer
// function year()
// document.write(new Date().getFullYear())







// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '~' + dd + '~' + yyyy;
// document.write(today);




// function updateDate() {
//     let today = new Date();
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     let yyyy = today.getFullYear();

//     //formatted current date
//     today = mm + '~' + dd + '~' + yyyy;
//     console.log(today)
// }

// document.write(today);


 // Select the HTML element to manipulate
// const date1 = document.querySelector("#date");
// const message = document.querySelector("#emessage");

// // Try to complete the method with options
// try {
//     const options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric"
//     };
//     date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>!`;
// } catch (e) {
//     console.log("Error with code or your browser does not support Locale");
// }
// // hamburger button========================

// function toggleMenu() {
//     document.getElementById('primaryNav').classList.toggle('open');
//     document.getElementById('hamburgerBtn').classList.toggle('open');;
// }

// const x = document.getElementById('hamburgerBtn')
// x.onclick = toggleMenu;