var isIE = isIEFunc();
if (isIE) {
    ieWper();
}

function ieWper() {
    var wper = document.getElementById('wper');
    wper.style.left = '50%';
    wper.style.top = '50%';
    wper.style.marginLeft = '-210px';
    wper.style.marginTop = '-385px';
}

function isIEFunc() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}