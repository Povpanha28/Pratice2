function hide(element) {
    element.style.display = "none";
}


// Display a given element

function show(element) {
    element.style.display = "block";
} 

const password = document.getElementById("passwordInput");
const checkbtn = document.getElementById("checkButton");

checkbtn.addEventListener("click", function() {
    if (password.value == 'TheSecret'){
        show(document.getElementById("wonView"));
        hide(document.getElementById("lostView"));
    }
    else { 
        show(document.getElementById("lostView"));
        hide(document.getElementById("wonView"));
    }
    hide(document.getElementById("passwordView"));
});