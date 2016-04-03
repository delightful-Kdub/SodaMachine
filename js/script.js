
//first interaction, "ok bye" on scroll down
window.onscroll = function() {firstFunction()};

function firstFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("bye").className = "blacktext";
    } else {
        document.getElementById("bye").className = "whitetext";
    }
}

//second interaction, green box disappears on mouse over
function secondDisappear(x) {
    x.style.height = "0px";
    x.style.width = "0px";

}

function secondNormal(x) {
    x.style.height = "150px";
    x.style.width = "150px";
}


//third ingteraction, on focus heckle
function thirdFunction() {
    alert("Oh, you think you have something to say?");
}
