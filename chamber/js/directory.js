const x = 'js/data.json'


async function getmembershipData() {
    const response = await fetch(x);
    const data = await response.json();
    console.table(data.info);

    displayinfo(data.info);
}

getmembershipData();

const displayinfo = (info) => {
    const cards = document.querySelector('div.cards'); // SPOTLIGHT INFORMATION
    const goldmembership = info.filter(membership => membership.membership == "Gold")

    info.forEach(membership => {
        // Create elements to add to the div.cards element
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

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(label);
        card.appendChild(web);
        cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression



var elements = document.getElementsByClassName("cards");

// Declare a loop variable
var i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
    }
}

// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
    }
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
