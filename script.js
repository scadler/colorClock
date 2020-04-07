function changeColors(){
    var date = new Date()
    hours = (date.getHours() < 10) ? "0"+date.getHours() : date.getHours()
    minutes = (date.getMinutes() < 10) ? "0"+date.getMinutes() : date.getMinutes()
    seconds = (date.getSeconds() < 10) ? "0"+date.getSeconds() : date.getSeconds()
    // milliseconds = date.getMilliseconds()
    // secondsSinceMidnight = hours*3600 + minutes*60 + seconds
    // secondsInADay = 86400
    hexHours = (Math.floor(255 * hours/24).toString(16).length > 1) ?  Math.floor(255 * hours/24).toString(16) : "0" + Math.floor(255 * hours/24).toString(16)
    hexMinutes = (Math.floor(255 * minutes/60).toString(16).length > 1) ? Math.floor(255 * minutes/60).toString(16): "0" + Math.floor(255 * minutes/60).toString(16)
    hexSeconds = (Math.floor(255 * seconds/60).toString(16).length > 1) ? Math.floor(255 * seconds/60).toString(16): "0" + Math.floor(255 * seconds/60).toString(16) 
    // console.log(secondsSinceMidnight +"   "+ secondsSinceMidnight%60)
    $("#time").text(hours + ":" + minutes + ":" + seconds)
    $("html").css("background-color","#"+`${hexHours}`+`${hexMinutes}`+`${hexSeconds}`)
    $("#timeHex").text("#"+`${hexHours}`+`${hexMinutes}`+`${hexSeconds}`)
    $("#hour").css("background-color","#"+`${hexHours}`+"0000")
    $("#hourHex").text("#"+`${hexHours}`+"0000")
    $("#minute").css("background-color","#00"+`${hexMinutes}`+"00")
    $("#minuteHex").text("#00"+hexMinutes+"00")
    $("#second").css("background-color","#0000"+`${hexSeconds}`)
    $("#secondHex").text("#0000"+hexSeconds)
}
setInterval(changeColors,1000)