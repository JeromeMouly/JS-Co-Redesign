/* ----- NAVIGATION ----- */

function myFunction() {
    var x = document.getElementById("navBar");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function closeOnClick() {
    let nav = document.getElementById("navBar");
    nav.className = nav.className.replace(" w3-show", "");

}

/* ----- DROPDOWNS MODAL BECOME MEMBERS ----- */

function myFunction() {
    var y = document.getElementById("chooseNumbers");
    if (y.className.indexOf("w3-show") == -1) {
        y.className += " w3-show";
    } else {
        y.className = y.className.replace(" w3-show", "");
    }
}