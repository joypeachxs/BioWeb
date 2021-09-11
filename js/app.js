function ScrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" })
}

document.querySelector("#topo").addEventListener("click", function(event) {

    scrollTo("#trailer");

    console.log("go to up");
});

function ScrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" })
}

document.querySelector("#btntopo").addEventListener("click", function(event) {

    scrollTo("#oquee");

    console.log("go to down");
});