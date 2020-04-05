var i = 0
function changeColors(){
    hex = i.toString(16)
    if(hex.length === 1 ){
        hex= "00000"+hex
    }
    else if(hex.length === 2 ){
        hex = "0000"+hex
    }
    if(hex.length === 3 ){
        hex= "000"+hex
    }
    else if(hex.length === 4 ){
        hex = "00"+hex
    }
    else if(hex.length === 5 ){
        hex= "0"+hex
    }
    hex = "#"+hex
    $("#counter").css("background-color",`${hex}`)
    $("#counterHex").text(hex)
    i++
    i = i%16581375
    var time = Math.floor((Date.now()/1000)%16581375
).toString(16)
    if(time.length === 1 ){
        time= "00000"+time
    }
    else if(time.length === 2 ){
        time = "0000"+time
    }
    else if(time.length === 3 ){
        time= "000"+time
    }
    else if(time.length === 4 ){
        time = "00"+time
    }
    else if(time.length === 5 ){
        time= "0"+time
    }
    time = "#"+time
    $("#clock").css("background-color",`${time}`)
    $("#timeHex").text(time)
    console.log(time)
}
setInterval(changeColors,10)