// Select the HTML element to manipulate
const date1 = document.querySelector("#date");
const message = document.querySelector("#emessage");

// Try to complete the method with options
try {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>!`;
} catch (e) {
    console.log("Error with code or your browser does not support Locale");
}