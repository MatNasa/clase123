difference = 0 ;
right_wrist_x = 0 ;
left_wrist_x = 0 ;

function setup() {
video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 500);
canvas.position(560, 150);
poseNet = ml5.poseNet(video, modelLoaded) ;
poseNet.on( "pose", gotPoses);
}

function modelLoaded() {
    console.log("modelo habilitado");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results); 
        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;
        difference = Math.floor(left_wrist_x - right_wrist_x);
        console.log("la coordenada x de tu muñeca derecha es " + right_wrist_x + ", la coordena x de tu muñeca izquierda es "+ left_wrist_x + "y el tamaño del cuadrado es de " + difference + "px")
    }
}

function draw() {
    background("rgb 145, 33, 33");
    document.getElementById("square_side").innerHTML = "el tamaño del texto es : " + difference;
    textSize( difference );
    fill('#138D75');
    text( "Marruecos va a ganar el mundial", 50, 400 );
}