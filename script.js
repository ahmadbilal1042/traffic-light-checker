/*
Error handled for inputs with capitalization and also with empty spaces
*/

let result = document.getElementById("result");

const lightCheck = () => {
    let input = document.getElementById("light-color");
    let light = input.value.toLowerCase().trim();
    switch (light) {
        case "red":
            result.innerHTML = "Stop cars"
            result.style.backgroundColor = "red";
            result.style.color = "black";
            break;
        case "yellow":
            result.innerHTML = "Slow down / prepare to stop"
            result.style.backgroundColor = "yellow";
            result.style.color = "black";
            break;
        case "green":
            result.innerHTML = "Go / allow movement"
            result.style.backgroundColor = "green";
            result.style.color = "black";
            break;

        default:
            result.innerHTML = "Invalid input! Please enter Red, Yellow, or Green"
            result.style.backgroundColor = "gray";
            result.style.color = "white";
            break;
    }
}

// Trigger on Enter key

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    lightCheck();
})
