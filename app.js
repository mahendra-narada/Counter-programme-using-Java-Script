let increasebtn = document.getElementById("increasebtn");
let resetbtn = document.getElementById("resetbtn");
let decreasebtn = document.getElementById("decreasebtn");
let label = document.getElementById("myh1");
let count = 0;

increasebtn.onclick = increase;
resetbtn.onclick = reset;
decreasebtn.onclick = decrease;

function increase() {
    count++;
    label.textContent = count;
}

function reset(params) {
    count=0;
    label.textContent = count;
}

function decrease(params) {
    count--;
    label.textContent = count;
}