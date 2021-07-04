
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById('save-el')

function save() {
    let countStr = count + ' - '
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

function resetAll() {
    count = 0
    saveEl.textContent = ''
    countEl.textContent = count
}

