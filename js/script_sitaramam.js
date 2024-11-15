console.log("Welcome to MyVibe");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/sita_ramam/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "EVARINI ADAGANU song", filePath: "songs/sita_ramam/1.mp3", coverPath: "images/sita ramam.jpg"},
    {songName: "Inthandham Song", filePath: "songs/sita_ramam/2.mp3", coverPath: "images/sita ramam.jpg"},
    {songName: "Kaanunna Kalyanam song", filePath: "songs/sita_ramam/3.mp3", coverPath: "images/sita ramam.jpg"},
    {songName: "Oh Sita Hey Rama song", filePath: "songs/sita_ramam/4.mp3", coverPath: "images/sita ramam.jpg"},
    {songName: "Tharali Tharali song", filePath: "songs/sita_ramam/5.mp3", coverPath: "images/sita ramam.jpg"},
    {songName: "Eppudo Ninnu song", filePath: "songs/sita_ramam/6.mp3", coverPath: "images/sita ramam.jpg"},
    {songName: "Ninnati Theepi Song", filePath: "songs/sita_ramam/7.mp3", coverPath: "images/sita ramam.jpg"},
    {songName: "Oh Prema song", filePath: "songs/sita_ramam/8.mp3", coverPath: "images/sita ramam.jpg"},
    {songName: "Nene Aa Nene Video Song", filePath: "songs/sita_ramam/9.mp3", coverPath: "images/sita ramam.jpg"},
    {songName: "Sita Ramam Theme", filePath: "songs/sita_ramam/10.mp3", coverPath: "images/sita ramam.jpg"},

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/sita_ramam/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>10){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/sita_ramam/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/sita_ramam/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})