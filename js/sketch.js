//setup function runs once at the start
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}
//the draw funcion runs 60 times per second in a continuous loop
var x2 = 800;
var y2 = 400;
var w2 = 300;
var x3 = 0;
var x = 400
var direction = 1;
var fill1 = 255;
var text1 = "text";
var fill2 = 255;
var fill3 = 0;
var fill4 = 0;
var smile = false;

function draw() {
    background(220);

    textSize(32);
    text(text1,10, 30);

    fill(0,0,0);
    square(150,150,500)

    fill(fill1, 255, 255);
    ellipse(x, 400, 300);
    //fill(200, 255, 255);
    //square(300, 300, 200);
    ellipse(x2, y2, w2);
    ellipse(x3, y2, w2);

    if (smile == false){
        fill(fill2, fill3, fill4);
        ellipse((x-60), 350, 50);
        ellipse((x+60), 350, 50);
        ellipse(x, 450, 150);

        fill(fill1, 255, 255);
        noStroke();
        rect((x-75),420, 150, 110);
    }
    if (smile == true){
        fill(fill2, fill3, fill4);
        ellipse(x, 350, 150)

        fill(fill1, 255, 255)
        rect((x-75), 275, 150, 110)

        fill(fill2, fill3, fill4);
        ellipse((x-60), 350, 50);
        ellipse((x+60), 350, 50);
    }

    if (direction == 1){
        if (x != (x2 - w2)){
            x += 1;
        }
        else{
            direction = 2;
        }
    }
    if (direction == 2){
        if (x != (x3 + w2)){
            x -= 1;
        }
        else{
            direction = 1;
        }
    }
    if (mouseX > width/2){
        fill1 = 255;
        fill3 = 0;
        text1 = "right";
        smile = false;
    }
    if (mouseX < width/2){
        fill1 = 0;
        fill3 = 255;
        text1 = "left";
        smile = true;
    }
}