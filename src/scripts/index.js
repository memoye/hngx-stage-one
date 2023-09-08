const day = document.getElementById('dayOfWeek');
const timeInUTC = document.getElementById('utcTime');
const timeInMS = document.getElementById('timeInMS');


updateUTCTime();


function getCurrentDayOfTheWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const dayIndex = today.getDay();
    console.log(today.getMilliseconds())
    return daysOfWeek[dayIndex];
}


function updateUTCTime() {
    const utcTime = new Date().toUTCString();
    return utcTime
}

function updateUTCTimeMS() {
    return utcTime
}

day.textContent = getCurrentDayOfTheWeek()
timeInUTC.textContent = updateUTCTime()

setInterval(() => {
    const utcTime = new Date();
    timeInUTC.textContent = utcTime.toUTCString()

}, 1000)

setInterval(() => {
    const milliseconds = Date.now();
    timeInMS.textContent = milliseconds
}, 1)
