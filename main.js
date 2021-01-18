var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var lastX,lastY,newX,newY
var checkmousedown=false
var color="blue"
var width=5
canvas.addEventListener("mouseup",mu)
function mu(e){
console.log("mouse is up")
checkmousedown=false
}

canvas.addEventListener("mouseleave",ml)
function ml(e){
    console.log("Mouse left the canvas")
    checkmousedown=false
}

canvas.addEventListener("mousedown",md)

function md(e){
    console.log("mouse has been clicked")
    checkmousedown=true
    color=document.getElementById("colorinput").value
    width=document.getElementById("widthinput").value
}

canvas.addEventListener("mousemove",mm)
function mm(e){
    console.log("mouse is moving")
    newX=e.clientX-canvas.offsetLeft
    newY=e.clientY-canvas.offsetTop
    if (checkmousedown==true) {
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
ctx.arc(newX,newY,50,0,2*Math.PI)
ctx.stroke()
    }
    lastX=newX
    lastY=newY
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}