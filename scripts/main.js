
//change the articletitle and articletext to title and text provided by the element clicked.
//happens onclick

function changeArticle(title, text) {
    document.getElementById("articletitle").innerHTML = title;
    document.getElementById("articletext").innerHTML = text;
    document.getElementById("article").classList.add("articleanimation");
    setTimeout(function() {
        document.getElementById("article").classList.remove("articleanimation");
    }, 200)
}