var convertBtn = document.querySelector('#sch');
var URLinput = document.querySelector('#lk');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
let data = {};
async function fetter(vidurl){
 
  const dt = await fetch(`https://noembed.com/embed?dataType=json&url=${vidurl}`)
      .then(res => res.json())
        .then(info => data = info)
      return dt;
}
function sendURL(URL) {
  document.getElementById('info-video').style.display = 'block';
  let videoId = getVideoId(`${URL}`);
  console.log(videoId.id);
  document.getElementById("yt-iframe").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
function download_video(URL)
{
  window.location.href = `http://localhost:4000/downloadMp4?URL=${URL}`;
}
var dwnld = document.getElementById('download');
dwnld.addEventListener('click',()=>{
  console.log(`URL: ${URLinput.value}`);
  download_video(URLinput.value);
})