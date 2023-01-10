let outputEl = document.getElementById("outputEl");
let ballEl = document.getElementById("btn");

ballEl.addEventListener("click", btnClicked);

function btnClicked() {
    let randnum = Math.random();
    let question = document.getElementById("question").value.toLowerCase();
    console.log(question);
    if (question === "does a magic 8 ball actually work?") {
        outputEl.innerHTML = "I am not to be underestimated";
    } else if (randnum < 0.1) {
        outputEl.innerHTML = "Yes no problem.";
    } else if (randnum < 0.3) {
        outputEl.innerHTML = "Yes exactly.";
    } else if (randnum < 0.5) {
        outputEl.innerHTML = "I don't think so but ask again.";
    } else if (randnum < 0.7) {
        outputEl.innerHTML = "Not likely.";
    } else if (randnum < 0.9) {
        outputEl.innerHTML = "Not looking too sure bud.";
    } else {
        outputEl.innerHTML = "Question again for a better answer.";
    }
}