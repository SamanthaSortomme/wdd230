



function hiddentime() {
    let date = new Date();

    const time = date.toLocaleString()
    console.log(time)
    document.querySelector('#hiddentime').value = time;
}
hiddentime()






