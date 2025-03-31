let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");

let songImage = document.querySelector(".song-img");


song.onloadeddata = function(){

    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playPause(){
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
        songImage.classList.remove("rotate");
    }
    else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
        songImage.classList.add("rotate");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime =  progress.value;
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
    songImage.classList.add("rotate");

}









