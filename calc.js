let screen = document.getElementById("screen")
buttons = document.querySelectorAll("button")
let screen_value = ""

for(item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerHTML
        if (buttonText == "X") {
            buttonText = "*"
            screen_value += buttonText
            screen.value = screen_value
        }
        else if (buttonText == "C") {
            screen_value = ""
            screen.value = screen_value
        }
        else if (buttonText == "=") {
            screen.value = eval(screen_value)
        }
        else {
            screen_value += buttonText
            screen.value = screen_value
        }
    })
}