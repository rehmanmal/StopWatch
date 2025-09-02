let [hours, minutes, seconds, centis] = [0, 0, 0, 0]
let timer = null
let display = document.getElementById("display")

function stopwatch() {
    centis++
    if (centis === 100) {
        centis = 0
        seconds++
    }
    if (seconds === 60) {
        seconds = 0
        minutes++
    }
    if (minutes === 60) {
        minutes = 0
        hours++
    }
    let h = String(hours).padStart(2, '0')
    let m = String(minutes).padStart(2, '0')
    let s = String(seconds).padStart(2, '0')
    let c = String(centis).padStart(2, '0')
    display.innerHTML = `${h}:${m}:${s}:${c}`
}
document.getElementById("start").addEventListener("click", () => {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 10)
})
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer)
})

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    [hours, minutes, seconds, centis] = [0, 0, 0, 0];
    display.innerHTML = "00:00:00:00";
});