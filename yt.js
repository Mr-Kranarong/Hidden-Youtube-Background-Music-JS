/* 
 Hidden Youtube Background Music JS
 --------------------
 Original Author: Amit Agarwal
 Editor: Kranarong Kuanhat
 
 Usage:
 <div data-video="VIDEO-ID"  
        data-autoplay="1"         
        data-loop="1"             
        id="youtube-audio">
        <script src="https://www.youtube.com/iframe_api"></script>
        <script src="https://raw.githubusercontent.com/Mr-Kranarong/Hidden-Youtube-Background-Music-JS/master/yt.js"></script>
 </div>
*/

function onYouTubeIframeAPIReady() {
    var e = document.getElementById("youtube-audio");
    var a = document.createElement("div");
    a.setAttribute("id", "youtube-player"), e.appendChild(a);
    var r = new YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: e.dataset.video,
        playerVars: {
            autoplay: e.dataset.autoplay,
            loop: e.dataset.loop,
            playlist: e.dataset.video
        }
    })
}
