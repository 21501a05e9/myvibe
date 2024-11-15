console.log("Welcome to MyVibe");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/instrumental/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "MaateRaaniChinnadaani song", filePath: "songs/instrumental/1.mp3", coverPath: "images/in.jpg"},
    {songName: "A devi varamu neenu Song", filePath: "songs/instrumenta/2.mp3", coverPath: "images/in.jpg"},
    {songName: "Andhamayina prema rani song", filePath: "songs/instrumental/3.mp3", coverPath: "images/in.jpg"},
    {songName: "Anjali Anjali (Flute)  song", filePath: "songs/instrumental/4.mp3", coverPath: "images/in.jpg"},
    {songName: "Annul Maelae Varanam ayiram Violin song", filePath: "songs/instrumental/5.mp3", coverPath: "images/in.jpg"},
    {songName: "INKEM INKEM INKEM KAVALE Song", filePath: "songs/instrumental/6mp3", coverPath: "images/in.jpg"},
    {songName: "Ilayaraja veena instrumental song", filePath: "songs/instrumental/7.mp3", coverPath: "images/in.jpg"},
    {songName: "jabili kosam song", filePath: "songs/instrumental/8.mp3", coverPath: "images/in.jpg"},
    {songName: "kaathalae Kaathalae (96) song", filePath: "songs/instrumental/9.mp3", coverPath: "images/in.jpg"},
    {songName: "Okey Oka Lokam song", filePath: "songs/instrumental/10.mp3", coverPath: "images/in.jpg"},
    {songName: "naa cheli rojave song", filePath: "songs/instrumental/11.mp3", coverPath: "images/in.jpg"},
    {songName: "Samajavaragamana song", filePath: "songs/instrumental/12.mp3", coverPath: "images/in.jpg"},
    {songName: "Nelluri Nerajana Song", filePath: "songs/instrumental/13.mp3", coverPath: "images/in.jpg"},
    {songName: "Paruma vanaga song", filePath: "songs/instrumental/14.mp3", coverPath: "images/in.jpg"},
    {songName: "prema ane pariksha song", filePath: "songs/instrumental/15.mp3", coverPath: "images/in.jpg"},
    {songName: "Kadhal Rojave Song", filePath: "songs/instrumental/16.mp3", coverPath: "images/in.jpg"},
    {songName: "Harris Jayaraj Hits Mashup", filePath: "songs/instrumental/17.mp3", coverPath: "images/in.jpg"},
    {songName: "DSP hits mashup", filePath: "songs/instrumental/18.mp3", coverPath: "images/in.jpg"},
    {songName: "AR Rahman hits mashup", filePath: "songs/instrumental/19.mp3", coverPath: "images/in.jpg"},
    {songName: "Ilaiyaraaja Instrumental BGM", filePath: "songs/instrumental/20.mp3", coverPath: "images/in.jpg"},
    
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
        audioElement.src = `songs/instrumental/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/instrumental/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/instrumental/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})