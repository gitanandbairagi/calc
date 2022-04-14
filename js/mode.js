let mode = document.getElementById("mode")
let css_id = "cssId"
mode.addEventListener("click", () => {
    console.log(document.getElementById("cssId"))
    if (! document.getElementById("cssId")) {
        let head = document.getElementsByTagName("head")[0]
        let link = document.createElement("link")
        link.id = "cssId"
        link.rel = "stylesheet"
        link.type = "text/css"
        link.href = "css/lightMode.css"
        head.append(link)
        console.log("IF")
    }
    else {
        document.getElementById("cssId").remove()
        console.log("ELSE")
    }
}) 