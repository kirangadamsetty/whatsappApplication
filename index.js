let statusEl = document.getElementById("status-paragraph");
let callsEl = document.getElementById("calls-paragraph");
let chartsEl = document.getElementById("charts-paragraph");
let chartContainer = document.getElementById("chart-container");
let callContainer = document.getElementById("call-container");
let statusContainer = document.getElementById("status-container");

statusEl.addEventListener("click", function() {
    statusEl.classList.add("default-bottom");
    chartsEl.classList.remove("default-bottom");
    callsEl.classList.remove("default-bottom");
    statusContainer.classList.remove("d-none");
    chartContainer.classList.add("d-none");
    callContainer.classList.add("d-none");
})
callsEl.addEventListener("click", function() {
    statusEl.classList.remove("default-bottom");
    chartsEl.classList.remove("default-bottom");
    callsEl.classList.add("default-bottom");
    chartContainer.classList.add("d-none");
    callContainer.classList.remove("d-none");
    statusContainer.classList.add("d-none");
})
chartsEl.addEventListener("click", function() {
    statusEl.classList.remove("default-bottom");
    chartsEl.classList.add("default-bottom");
    callsEl.classList.remove("default-bottom");
    chartContainer.classList.remove("d-none");
    callContainer.classList.add("d-none");
    statusContainer.classList.add("d-none");
})