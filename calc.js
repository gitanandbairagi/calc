let screen = document.getElementById("screen")
let history = document.getElementById("history")
buttons = document.querySelectorAll("button")
let screen_value = ""

for(item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerHTML
        let past
        if (buttonText == "x") {
            buttonText = "*"
            screen_value += buttonText
            screen.value = screen_value
        }
        else if (buttonText == "AC") {
            screen_value = ""
            screen.value = screen_value
        }
        else if (buttonText == "=") {
            past = screen.value
            screen.value = eval(screen_value)
            past += "=" + screen.value
            history.value = past
        }
        else {
            screen_value += buttonText
            screen.value = screen_value
        }
    })
}