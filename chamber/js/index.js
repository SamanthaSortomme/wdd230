

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



// ====================POSTED 2 CODES I TOOK FROM TO GET THIS===============


const last = document.querySelector('#last');


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    cvalue = JSON.stringify({ username: cvalue, visited: true, visitedOn: d.getTime() });
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    const name = cname + "=";
    const cSplit = document.cookie.split(';');
    for (let i = 0; i < cSplit.length; i++) {
        let c = cSplit[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            c = c.substring(name.length, c.length);
            return JSON.parse(c);
        }
    }
    return "";
 
}

/**
 * Take the difference between the dates and divide by milliseconds per day.
 * Round to nearest whole number to deal with DST.
 */
function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function checkCookie() {
    const user = getCookie("username");

    if (user.visited) {
        const currentDate = new Date()
        const previousDate = new Date(user.visitedOn)
        const deltaDay = datediff(previousDate, currentDate)

        // alert
        
        last.innerHTML = ("Welcome again " + user.username + '. ' + deltaDay + ' Days have elapsed since your last visit.');
        setCookie("username", user.username, 365); //update cookie for correct last arrived time
        console.log(last.innerHTML)
    }
    else {
        const username = prompt("Please enter your name:", "");
        if (username != null && username != "") {
            setCookie("username", username, 365);
        }
    }
}

checkCookie();

const closeLast = document.getElementById('closeLast')
closeLast.addEventListener('click', function (e) {
    console.log('button was clicked')
})


document.getElementById('closeLast').onclick = function () {
    this.parentNode.remove();
}


// =====================Took from 2 codes to get what I have============

// function setCookie(cname,cvalue,exdays) {
// 	var d = new Date();
// 	d.setTime(d.getTime() + (exdays*24*60*60*1000));
// 	var expires = "expires=" + d.toGMTString();
// 	document.cookie = cname+ "=" + cvalue +"; " + expires;
// }
// function getCookie(cname) {
// 	var name = cname + "=";
// 	var ca = document.cookie.split(';');
// 	for(var i=0; i<ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt (0)==' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return "";
// }

// function checkCookie(){
// 	var username = getCookie("username");
// 	if (username != null && username != "")
// 	{
// 		alert("Welcome again " + username);
// 	}
// 	else
// 	{
// 		username=prompt("Please enter your name:","");
// 		if (username != null && username != "")
// 		{
// 			setCookie("username",username,365);
// 		}
// 	}
// }

//===============================This is the second code===============





// function setCookie(cname,cvalue,exdays) {
//     var d = new Date();
//     cvalue = JSON.stringify({username:cvalue,visited:true,visitedOn:d.getTime()});
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires=" + d.toGMTString();
//     document.cookie = cname+ "=" + cvalue +"; " + expires;
//   }
  
//   function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0; i<ca.length; i++) {
//       var c = ca[i];
//       while (c.charAt (0)==' ') {
//           c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//           var c = c.substring(name.length, c.length);
//           return JSON.parse(c);
  
//       }
//     }
//     return "";
//   }
  
//   function checkCookie(){
//     var user = getCookie("username");
  
//     if (user.visited)
//     {
//       alert("Welcome again " + user.username + " you visited here on " +  new Date(user.visitedOn).toTimeString() );
//       setCookie("username",user.username,365); //update cookie for correct last arrived time
//     }
//     else
//     {
//       username=prompt("Please enter your name:","");
//       if (username != null && username != "")
//       {
//           setCookie("username",username,365);
  
//       }
//     }
//   }
  
//   checkCookie();

// var today = new Date();
// var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
// var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
// var dateTime = date + ' at ' + time;
// function getCookieValue(a) {
//     const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
//     return b ? b.pop() : '';
// }
// console.log("getCookieValue " + getCookieValue("lastvisited"));
// document.cookie = 'lastvisited=' + dateTime


// let a = new Date();
// let b = new Date();
// console.log(a);
// localStorage.a = a;
// localStorage.b = b;
// a = Date.parse(localStorage.a);
// b = Date.parse(localStorage.b);
// const lastvisited = b - a;
// console.log(lastvisited);

// document.getElementById('lastvisited').innerHTML = lastvisited


// const lastVisit = getCookie('lastvisited');
// const now = Date.now();
// if (lastVisit) {
//     const hoursSinceLastTime = Math.ceil((parseInt(lastVisit) - now) / 3600);
//     alert(`It's been ${hoursSinceLastTime} hour(s) since you last visited us.`);
// }
// setCookie('lastvisited', now);



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