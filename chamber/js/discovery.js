

const imagesToLoad = document.querySelectorAll("img[data-src]");
const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            };
        });
    }, imgOptions);

    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    })
} else {
    imagesToLoad.forEach(img => {
        loadImages(img)
    });
}

// ====================== LAST ============================

// #last

















// const last = document.querySelector('#last');


// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     cvalue = JSON.stringify({ username: cvalue, visited: true, visitedOn: d.getTime() });
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// }

// function getCookie(cname) {
//     const name = cname + "=";
//     const cSplit = document.cookie.split(';');
//     for (let i = 0; i < cSplit.length; i++) {
//         let c = cSplit[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             c = c.substring(name.length, c.length);
//             return JSON.parse(c);
//         }
//     }
//     return "";
 
// }

/**
 * Take the difference between the dates and divide by milliseconds per day.
 * Round to nearest whole number to deal with DST.
//  */
// function datediff(first, second) {
//     return Math.round((second - first) / (1000 * 60 * 60 * 24));
// }

// function checkCookie() {
//     const user = getCookie("username");

//     if (user.visited) {
//         const currentDate = new Date()
//         const previousDate = new Date(user.visitedOn)
//         const deltaDay = datediff(previousDate, currentDate)

//         // alert
        
//         last.innerHTML = ("Welcome again " + user.username + '. ' + deltaDay + ' Days have elapsed since your last visit.');
//         setCookie("username", user.username, 365); //update cookie for correct last arrived time
//         console.log(last.innerHTML)
//     }
//     else {
//         const username = prompt("Please enter your name:", "");
//         if (username != null && username != "") {
//             setCookie("username", username, 365);
//         }
//     }
// }

// checkCookie();

// const closeLast = document.getElementById('closeLast')
// closeLast.addEventListener('click', function (e) {
//     console.log('button was clicked')
// })


// document.getElementById('closeLast').onclick = function () {
//     this.parentNode.remove();
//}

// ====================POSTED 2 CODES I TOOK FROM TO GET THIS===============


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