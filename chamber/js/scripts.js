var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '~' + dd + '~' + yyyy;
document.write(today);


const banner = (day) => {
    const header = document.querySelector('header');
    const bannerH1 = document.createElement('h1');
    bannerH1.innerText = `🤝🏼 Come join us for the chamber meet and greet ${day} at 7: 00 p.m.`
    header.appendChild(bannerH1);
}
let dayName = newDate();
switch (dayName.getDay()) {
    case 0, 1, 2, 4, 5, 6, 7:
        banner('ice-cream')
        break;
    case 3:
        banner('Wednesday')
        break;
    default:
        console.log('wow, it is a crazy day...or is it?');
}





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