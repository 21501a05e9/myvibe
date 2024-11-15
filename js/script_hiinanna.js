console.log("Welcome to MyVibe");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/hi_nanna/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Odiyamma song", filePath: "songs/hi_nanna/1.mp3", coverPath: "images/hii nanna.jpg"},
    {songName: "Samayama Song", filePath: "songs/hi_nanna/2.mp3", coverPath: "images/hii nanna.jpg"},
    {songName: "Adigaa song", filePath: "songs/hi_nanna/3.mp3", coverPath: "images/hii nanna.jpg"},
    {songName: "Chedhu Nijam song", filePath: "songs/hi_nanna/4.mp3", coverPath: "images/hii nanna.jpg"},
    {songName: "Asalelaa song", filePath: "songs/hi_nanna/5.mp3", coverPath: "images/hii nanna.jpg"},
    {songName: "Ammadi Song", filePath: "songs/hi_nanna/6mp3", coverPath: "images/hii nanna.jpg"},
    {songName: "Gaaju Bomma song", filePath: "songs/hi_nanna/7.mp3", coverPath: "images/hii nanna.jpg"},
    {songName: "Needhe Needhe song", filePath: "songs/hi_nanna/8.mp3", coverPath: "images/hii nanna.jpg"},
    {songName: "Enno Enno song", filePath: "songs/hi_nanna/9.mp3", coverPath: "images/hii nanna.jpg"},
    {songName: "IDHE IDHE song", filePath: "songs/hi_nanna/10.mp3", coverPath: "images/hii nanna.jpg"},
    
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
        audioElement.src = `songs/hi_nanna/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/hi_nanna/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/hi_nanna/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})