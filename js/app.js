
var question = document.getElementById("question");
var comment = document.getElementById("comment");
var hiring = document.getElementById("hiring");

var qtextbox = document.getElementById("questiontext");
var ctextbox = document.getElementById("commenttext");
var htextbox = document.getElementById("hiretext");
var ratebox = document.getElementById("rate");

// Display Question Text Section
question.onclick = function () {
    qtextbox.style.display = "";
    ctextbox.style.display = "none";
    htextbox.style.display = "none";
    ratebox.style.display = "none";
}

// Display Comment Text Section
comment.onclick = function () {
    ctextbox.style.display = "";
    qtextbox.style.display = "none";
    htextbox.style.display = "none";
    ratebox.style.display = "none";

}

// Display Hiring Text Section + Rate of Pay Input Box
hiring.onclick = function () {
    htextbox.style.display = "";
    qtextbox.style.display = "none";
    ctextbox.style.display = "none";
    ratebox.style.display = "";

}

// change background colours based on scroll location
function backgroundChange() 
{
    if(this.scrollY > (this.innerHeight * (9.8/10))) // if scroll gets past a certain point
    {
        // add the class that has a different background color 
        document.body.classList.add("colorblock");
    }
    else
    {
        // return to original body background color
        document.body.classList.remove("colorblock");
    }
}
window.addEventListener("scroll", backgroundChange);