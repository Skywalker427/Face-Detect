let video = document.getElementById("vid");


             

let startVideo = ()=>{
    navigator.getUserMedia(
            {video:{}},
            stream => video.srcObject=stream,
            error => console.log(error)
        )
}


Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri("models"),
             faceapi.nets.faceLandmark68Net.loadFromUri("models"),
             faceapi.nets.faceRecognitionNet.loadFromUri("models"),
             faceapi.nets.faceExpressionNet.loadFromUri("models")
            ]).then(startVideo())

video.addEventListener("play", ()=>{
    setInterval(async () => {
       const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
       console.log(detections)
        
    }, 1000);
})