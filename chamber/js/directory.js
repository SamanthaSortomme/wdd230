const x = 'js/data.json'
const list = document.querySelector('.list');
const grid = document.querySelector('.grid');

async function getmembershipData() {
    const response = await fetch(x);
    const data = await response.json();
    // console.table(data.info);

    displaySpotlights(data.info)
    displayinfo(data.info);
}

getmembershipData();




const random = (lights) => {

    return lights[Math.floor((Math.random() * lights.length))];
}

random([2, 3, 0])
console.log(random)
console.log([2, 3, 0][1])



function shuffle(sLight) {
    for (let i = sLight.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



const displaySpotlights = (info) => {
    const spotlights = document.querySelector('div.spotlights');
    const sLight = info.filter(membership => {
        return membership.membership == "Gold" || membership.membership == "Silver"
    }).slice(0, 3)
    // shuffle(sLight) .sort()
    console.log(sLight)


    sLight.forEach(membership => {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let label = document.createElement('p');
        let web = document.createElement('a');
        web.setAttribute('href', membership.web);
        // let web = document.createElement('href', membership.web);

        h2.textContent = membership.name;
        portrait.setAttribute('src', membership.portrait);
        portrait.setAttribute('alt', `Portait of ${membership.name}`);
        portrait.setAttribute('loading', 'lazy');
        address.textContent = membership.address;
        phone.textContent = membership.phone
        label.textContent = membership.label
        web.textContent = 'website'

        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(label);
        card.appendChild(web);
        // cards.appendChild(card);

        spotlights.appendChild(card);
    }) // end of forEach loop
} // end of function expression

// const shuffle = spotlights => {
//     for (let i = spotlights.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = spotlights[i];
//         spotlights[i] = spotlights[j];
//         spotlights[j] = temp;
//     }
// }

// let spotlights = document.createElement()









const displayinfo = (info) => {
    const cards = document.querySelector('div.cards');


    info.forEach(membership => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let label = document.createElement('p');
        let web = document.createElement('a');
        web.setAttribute('href', membership.web);
        // let web = document.createElement('href', membership.web);

        h2.textContent = membership.name;
        portrait.setAttribute('src', membership.portrait);
        portrait.setAttribute('alt', `Portait of ${membership.name}`);
        portrait.setAttribute('loading', 'lazy');
        address.textContent = membership.address;
        phone.textContent = membership.phone
        label.textContent = membership.label
        web.textContent = 'website'

        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(label);
        card.appendChild(web);
        cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression






// if ([membership] == "Gold" or "Silver");
// return [0, 3, 5,]

// var elements = document.getElementsByClassName("cards");

// // Declare a loop variable
// var i;

// // List View
// function listView() {
//     for (i = 0; i < elements.length; i++) {
//         elements[i].style.width = "100%";
//     }
// }

// // Grid View
// function gridView() {
//     for (i = 0; i < elements.length; i++) {
//         elements[i].style.width = "50%";
//     }
// }






const gridbutton = document.querySelector("#disgrid");
const listbutton = document.querySelector("#dislist");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("dgrid");
    display.classList.remove("dlist");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("dlist");
    display.classList.remove("dgrid");
}

// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

// // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
//     // example using arrow function
//     display.classList.add("grid");
//     display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
//     display.classList.add("list");
//     display.classList.remove("grid");
// }
