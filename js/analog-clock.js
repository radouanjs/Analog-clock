const canva = document.querySelector(".canva");
const ctx = canva.getContext("2d");

let radius = canva.height/2;
ctx.translate(radius, radius);
radius = radius*0.90;

// drawClock();
setInterval(drawClock, 1000);

function drawClock(){
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}
function drawFace(ctx, radius){
    
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = "#413a38";
    ctx.fill();

    let grad = ctx.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05);
    grad.addColorStop(0, "#333");
    grad.addColorStop(0.5, "#fff");
    grad.addColorStop(1, "#546E7A");
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius*0.07, 0, 2*Math.PI);
    ctx.fillStyle = "#668290";
    ctx.fill();
}

function drawNumbers(ctx, radius){
    let ang, num;

    ctx.font = radius*0.15 + "px monospace";
    ctx.textBaseLine = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "#668290";

    for(num = 1; num < 13; num++){

        ang = (num*Math.PI)/6;

        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang)

        ctx.fillText(num.toString(), 0, 0);

        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang)
    }
}

function drawTime(ctx, radius){

   let now = new Date();
   let hour = now.getHours();
   let minute = now.getMinutes();
   let second = now.getSeconds();

   hour = hour%12;
   hour = (hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
   drawHand(ctx, hour, radius*0.5, radius*0.07);

   minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
   drawHand(ctx, minute, radius*0.8, radius*0.07);

   second = second*Math.PI/30;
   drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width){

    
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#668290";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0 , -length);
    ctx.stroke();
    ctx.rotate(-pos);

    
}

