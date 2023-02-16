

const bannerMessage = (day) => {
    const bannerH1 = document.querySelector('.bannerH1');
    const message = document.createElement('h2');
    message.innerText = `🤝🏼 Come join us for the chamber meet and greet ${day} at 7: 00 p.m.`
    console.log(message)
    console.log(bannerH1)
    bannerH1.appendChild(message);
}


let dayName = new Date();
switch (dayName.getDay()) {
    case 1:
        bannerMessage('Wednesday')
        document.querySelector(".banner").style.display = "grid";
        break;
    case 2:
        bannerMessage('Wednesday')
        document.querySelector(".banner").style.display = "grid";
        break;
        c
    default:
        console.log('wow, it is a crazy day...or is it?');
        console.log(dayName.getDay())
}

const closeBanner = document.getElementById('closeBanner')
closeBanner.addEventListener('click', function (e) {
    console.log('button was clicked')
})


document.getElementById('closeBanner').onclick = function () {
    this.parentNode.parentNode.remove();
}


// ==============SPOTLIGHTS==================================

const y = 'js/data.json'
async function getmembershipData() {
    const response = await fetch(y);
    const data = await response.json();
    // console.table(data.info);
    displaySpotlights(data.info);
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
        [sLight[i], sLight[j]] = [sLight[j], sLight[i]];
    }
    return sLight
}
const displaySpotlights = (info) => {
    const spotlights = document.querySelector('div.spotlights');
    let sLight = info.filter(membership => {
        return membership.membership == "Gold" || membership.membership == "Silver"
    })
    sLight = shuffle(sLight).slice(0, 3)

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


        spotlights.appendChild(card);
    })
}



