
//change the articletitle and articletext to title and text provided by the element clicked.
//happens onclick

function changeArticle(title, text, link, extratext) {
    document.getElementById("articletitle").innerHTML = title;
    document.getElementById("articletext").innerHTML = text;
    document.getElementById("donation").innerHTML = link;
    document.getElementById("extratext").innerHTML = extratext;
    document.getElementById("article").classList.add("articleanimation");
    setTimeout(function() {
        document.getElementById("article").classList.remove("articleanimation");
    }, 200)
}

document.body.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 32) {
        document.getElementById("rickroll").classList.add("rickroll");
    }
})

document.body.addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.keyCode === 32) {
        document.getElementById("rickroll").classList.remove("rickroll");
    }
})

