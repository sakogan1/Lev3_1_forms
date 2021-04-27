function changeSize(){
    var ran = document.getElementById("range").value
    var px ="px"
    var size = ran + px
    console.log(size)
    document.getElementById("areaToChange").style.fontSize = size
}
function changeFont(){
    var font = document.getElementById("font-select").value
    console.log(font)
    document.getElementById("areaToChange").style.fontFamily = font
}
function writeText(){
    var textValue =document.getElementById("internaltext").value
    document.getElementById("areaToChange").innerHTML = textValue
}

