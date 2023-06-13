Webcam.set({
    width:350,
    height:290,
    image_format: "jpeg",
    jpeg_quality:90
    }) 

    camera = document.getElementById("camera");
    Webcam.attach(camera);
   
    function takesnapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
        })
    }

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/J0apdjhWN/model.json", modelloaded());

    function modelloaded(){
        console.log("model loaded!")
    }