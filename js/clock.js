function dispTime() {
    var elt = document.getElementById("clock");
    var now = new Date();
    elt.innerHTML = now.toLocaleTimeString();
    setTimeout(dispTime, 1000);
}
window.onload = dispTime;