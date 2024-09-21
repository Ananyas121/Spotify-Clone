//favourite songs
var favsongs=[
{Title:'tu jo mileya',path:'Tu Jo Mileya - Juss (DJJOhAL.Com).mp3',image:'tu-jo.jpg'},
{Title:'Khayal',path:'Khayaal - Talwiinder (DJJOhAL.Com).mp3',image:'khayal.jpg'},
{Title:'Junoon',path:'s1.mp3',image:'Junoon.jpg'},
{Title:'Diamond Ni',path:'s3.mp3',image:'diamondni.jpg'}

];
var Popularsongs=[
{Title:'Fallin for you',path:'s2.mp3',image:'Fallin.jpg'},
{Title:'Dilkash',path:'s5.mp3',image:'dilkash.jpg'},
{Title:'Chandrachood',path:'s4.mp3',image:'chandrachood.jpg'},
{Title:'Waaliyan',path:'s6.mp3',image:'waaliyan.jpg'}
];
var Musics=[
{Title:'',path:'',image:''}

];


function playsong(songPath){
    audioplayer.src= songPath;
    audioplayer.play();
}var fav=document.querySelector('#favsong');

var audioplayer=document.querySelector('#audio');


function songCardCreate(){
    favsongs.forEach((e)=>{
        var card=`
        <div class="card"> 
<div class="card-img">

    <img src="${e.image}"alt="">
</div>
<i class="fa-solid fa-play"></i>
<h4>${e.Title}</h4>

</div>
         `
         var tempDiv=document.createElement('div');
         tempDiv.innerHTML=card;
         fav.append(tempDiv);
        tempDiv.addEventListener('click',()=>{
    playsong(e.path)
})
    })

}
songCardCreate();











/* <div class="card"> 
<div class="card-img">

    <img src="https://static.vecteezy.com/system/resources/previews/021/693/323/non_2x/a-logo-for-a-music-company-that-is-made-by-song-brand-vector.jpg"
        alt="">
</div>
<i class="fa-solid fa-play"></i>
<h4>Manohari</h4>

</div>*/