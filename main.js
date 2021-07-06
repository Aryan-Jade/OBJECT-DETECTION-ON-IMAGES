tv1 = "";
laptop1 = "";
bottle1 = "";
bed1 ="";
basket1 = "";
status = "";
objects = [];

function preload(){
    tv1 = loadImage('tv.jpg');
    laptop1 = loadImage('laptop.jfif');
    bottle1 = loadImage('bottle.jpg');
    bed1 = loadImage('bed.jpg');
    basket1 = loadImage('basket.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(tv1,  gotResult);
    objectDetector.detect(laptop1, gotResult);
    objectDetector.detect(bottle1, gotResult);
    objectDetector.detect(bed1, gotResult);
    objectDetector.detect(basket1, gotResult);
}

function draw(){
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            percent = floor(objects[i].confidence * 100);

            fill("#FF0000");
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function tv(){
    window.location = "index.html";
    image(tv1, 0, 0, 640, 420);
}

function laptop(){
    window.location = "index.html";
    image(laptop1, 0, 0, 640, 420);
}

function bottle(){
    window.location = "index.html";
    image(bottle1, 0, 0, 640, 420);
}

function bed(){
    window.location = "index.html";
    image(bed1, 0, 0, 640, 420);
}

function basket(){
    window.location = "index.html";
    image(basket1, 0, 0, 640, 420);
}

function back(){
    window.location = "front.html";
}