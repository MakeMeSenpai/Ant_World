// type of IIFE to tell the time
let x = "";
(function () {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);
    if (day > 30 && day < 92) {
        x = "spring_"
        console.log("It's Spring")
    } else if (day > 273 && day < 335) {
        x = "fall_"
        console.log("It's Autumn")
    } else if (day < 31 || day > 335) {
        x = "winter_"
        console.log("It's Winter")
    } else {
        console.log("It's another sunny day")
    }
})()