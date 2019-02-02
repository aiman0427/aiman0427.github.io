function shapes()
{
    drawRectangles();
    drawCircles();
    drawTriangle();
    drawImage();
    drawLine();
    drawText();
    startAnimation();
}

function drawRectangles()
{

    var canvas = document.getElementById("myCanvas");
    //this next line is arguably the most important
    var ctx = canvas.getContext("2d");
    //draw a rectangle
    ctx.fillStyle = "#00cc00";
    ctx.fillRect(0,400,500,450)
}

var a; //reference the animation function
var sR =100;


function initialize() //sets up animation
{
    drawBackground();
    drawCircles();

    var ctx = document.getElementById("myCanvas").getContext("2d");

    //sun
    ctx.beginPath();
    ctx.strokeStyle="#fdff00";
    ctx.width=2;
    ctx.arc(0,0,sR,0,2*Math.PI);
    ctx.fillStyle="#fdff00";
    ctx.fill();
    ctx.stroke();

}

function drawBackground()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#b3ffff";
}

function startAnimation()
{
    animate();
}

function animate() //lists of things that will animate (in order)
{
    a = requestAnimationFrame(animate); //enables animation
    drawBackground();
    moveHandRight();
    checkHand();
}


var moveAmountR = 0.5;
function moveHandRight()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    sR = sR + moveAmountR;

    //sun
    ctx.beginPath();
    ctx.strokeStyle="#fdff00";
    ctx.width=2;
    ctx.arc(0,0,sR,0,2*Math.PI);
    ctx.fillStyle="#fdff00";
    ctx.fill();
    ctx.stroke();


}

function checkHand()
{

    if (sR > 150 )
    {
        moveAmountR = moveAmountR * (-1);
    }
    if (sR < 90 )
    {
        moveAmountR = moveAmountR * (-1);
    }

}
function drawCircles()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle="#ffff00";
    ctx.arc(0,0,120,80,(1/2)*Math.PI,false);
    ctx.fillStyle = "#ffff00";
    ctx.fill();
    ctx.stroke();
}

function drawTriangle()
{

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
// the triangle
    ctx.beginPath();
    ctx.moveTo(250, 400);
    ctx.lineTo(325, 300);
    ctx.lineTo(400, 400);
    ctx.closePath();

// the outline
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

// the fill color
    ctx.fillStyle = "#FFCC00";
    ctx.fill();
}

function drawLine()
{
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(325,300);
        ctx.lineWidth=2;
        ctx.lineTo(325,400);
        ctx.strokeStyle="#000000";
        ctx.stroke();

}

function drawText()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle="#000000";
    ctx.font="20px Arial";
    ctx.fillText("I WANT YOUR FOOD!",165,295);

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle="#000000";
    ctx.font="9.8px Arial";
    ctx.fillText("please spare us!",355,325);
}

var pic1 = new Image();
pic1.src = "img/bear.png";
function drawImage()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(pic1,75,300,100,100);
}

