let video = document.getElementById("vid");

let startVideo = ()=>{
    navigator.getUserMedia(
            {video:{}},
            stream => video.srcObject=stream,
            error => console.log(error)
        )
}

startVideo();
