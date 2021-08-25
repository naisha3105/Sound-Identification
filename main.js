function classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelready);
}

function modelready(){
    classifier.classify(gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
        else{
            console.log(results);
            rnr=Math.floor(Math.random()*255)+1;
            rng=Math.floor(Math.random()*255)+1;
            rnb=Math.floor(Math.random()*255)+1;
            document.getElementById("label").innerHTML="I can hear "+results[0].label;
            document.getElementById("result").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
            document.getElementsById("label").style.color="rgb("+rnr+","+rng+","+rnb+")";
            document.getElementsById("result").style.color="rgb("+rnr+","+rng+","+rnb+")";

    img = document.getElementById('alien1') ;
    img1 = document.getElementById('alien2') ;
    img2 = document.getElementById('alien3') ;
    img3 = document.getElementById('alien4');

    if (results[0].label == "Clap") { 
        img.src = 'aliens-01.gif'; 
        img1.src = 'aliens-02.png'; 
        img2.src = 'aliens-03.png'; 
        img3.src = 'aliens-04.png';
} else if (results[0].label == "Bell") { 
    img.src = 'aliens-01.png'; 
    img1.src = 'aliens-02.gif'; 
    img2.src = 'aliens-03.png'; 
    img3.src = 'aliens-04.png'; 
} else if (results[0].label == "Snapping") { 
    img.src = 'aliens-01.png'; 
    img1.src = 'aliens-02.png'; 
    img2.src = 'aliens-03.gif'; 
    img3.src = 'aliens-04.png'; 
} else{ img.src = 'aliens-01.png'; 
img1.src = 'aliens-02.png'; 
img2.src = 'aliens-03.png'; 
img3.src = 'aliens-04.gif'; 
} 
} 
}