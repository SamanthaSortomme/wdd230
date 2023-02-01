// for banner in week 5
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
    case 3:
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
