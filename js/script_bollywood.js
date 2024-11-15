console.log("Welcome to MyVibe");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/bollywood/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Aaj Ki Raat song", filePath: "songs/bollywood/1.mp3", coverPath: "images/bollywood.jpg"},
    {songName: "Agar Tum Sath Ho Song", filePath: "songs/bollywood/2.mp3", coverPath: "images/bollywood.jpg"},
    {songName: "Chikni Chameli song", filePath: "songs/bollywood/3.mp3", coverPath: "images/bollywood.jpg"},
    {songName: "DIL KO KARRAR AAYA song", filePath: "songs/bollywood/4.mp3", coverPath: "images/bollywood.jpg"},
    {songName: "DILBAR song", filePath: "songs/bollywood/5.mp3", coverPath: "images/bollywood.jpg"},
    {songName: "Kala Chashma Song", filePath: "songs/bollywood/6mp3", coverPath: "images/bollywood.jpg"},
    {songName: "Tauba Tauba song", filePath: "songs/bollywood/7.mp3", coverPath: "images/bollywood.jpg"},
    {songName: "Khairiyat song", filePath: "songs/bollywood/8.mp3", coverPath: "images/bollywood.jpg"},
    
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
        audioElement.src = `songs/bollywood/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/bollywood/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/bollywood/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})