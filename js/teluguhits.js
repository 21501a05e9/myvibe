console.log("Welcome to MyVibe");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/telugu_list/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Anaganaga oka uru song", filePath: "songs/telugu_list/1.mp3", coverPath: "images/hello.jpg"},
    {songName: "O Rendu Prema Meghaalila Song", filePath: "songs/telugu_list/2.mp3", coverPath: "images/baby.jpg"},
    {songName: "Cheliya Cheliya song", filePath: "songs/telugu_list/3.mp3", coverPath: "images/neenu_rowdy_ne.jpg"},
    {songName: "Chakori song", filePath: "songs/telugu_list/4.mp3", coverPath: "images/chakori.jpg"},
    {songName: "Kanulanu Thaake song", filePath: "songs/telugu_list/5.mp3", coverPath: "images/manam.jpg"},
    {songName: "Choosi Chudangane Song", filePath: "songs/telugu_list/6mp3", coverPath: "images/chalo.jpg"},
    {songName: "Oy! Oy! song", filePath: "songs/telugu_list/7.mp3", coverPath: "images/oy.jpg"},
    {songName: "Chinni Chinni Aasalu song", filePath: "songs/telugu_list/8.mp3", coverPath: "images/manam.jpg"},
    {songName: "Karige Loga song", filePath: "songs/telugu_list/9.mp3", coverPath: "images/arya.jpg"},
    {songName: "Tharagathi Gadhi song", filePath: "songs/telugu_list/10.mp3", coverPath: "images/colorphoto.jpg"},
    {songName: "Nuvvunte Naa Jathagaa song", filePath: "songs/telugu_list/11.mp3", coverPath: "images/i.jpg"},
    {songName: "sandadi sandadi song", filePath: "songs/telugu_list/12.mp3", coverPath: "images/committe_kurolu.jpg"},
    {songName: "gorrela song", filePath: "songs/telugu_list/13.mp3", coverPath: "images/committe_kurolu.jpg"},
    {songName: "college papa song", filePath: "songs/telugu_list/14.mp3", coverPath: "images/mad.jpg"},
    {songName: "kurchi madathapetti song", filePath: "songs/telugu_list/15.mp3", coverPath: "images/guntur_karam.jpg"},
    {songName: "prema garadi song", filePath: "songs/telugu_list/16.mp3", coverPath: "images/committe_kurolu.jpg"},
    {songName: "nuvu navvukuntu song", filePath: "songs/telugu_list/17.mp3", coverPath: "images/mad.jpg"},
    {songName: "A rojulu malli ravu song", filePath: "songs/telugu_list/18.mp3", coverPath: "images/committe_kurolu.jpg"},
    {songName: "pakka local song", filePath: "songs/telugu_list/19.mp3", coverPath: "images/janathagarage.jpg"},
    {songName: "Door number song", filePath: "songs/telugu_list/20.mp3", coverPath: "images/opiri.jpg"},
    {songName: "Digu digu digu naaga song", filePath: "songs/telugu_list/21.mp3", coverPath: "images/varugukavalenu.jpg"},
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
        audioElement.src = `songs/telugu_list/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/telugu_list/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/telugu_list/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})