var i = 0
function changeColors(){
    hex = i.toString(16)
    if(hex.length === 1 ){
        hex= "00"+hex
    }
    else if(hex.length === 2 ){
        hex = "0"+hex
    }
    hex = "#"+hex
    $("#counter").css("background-color",`${hex}`)
    $("#counterHex").text(hex)
    i++
    i = i%3375
}
setInterval(changeColors,30)

