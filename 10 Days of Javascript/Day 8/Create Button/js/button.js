var btn = document.getElementById("btn");

btn.onclick = function() {
    let cur = this.innerHTML
    this.innerHTML = parseInt(cur)+1
}