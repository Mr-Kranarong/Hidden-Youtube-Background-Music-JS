/* 
 Hidden Youtube Background Music JS
 --------------------
 Original Author: Amit Agarwal
 Editor: Kranarong Kuanhat
 This fork locate here: https://github.com/Mr-Kranarong/Hidden-Youtube-Background-Music-JS
 
 Usage:
 <div data-video="VIDEO-ID"          
        data-loop="1"
        data-playlist="PLAYLIST-LEAVE EMPTY IF ONLY SINGLE SONG"             
        id="youtube-audio">
        <script src="https://www.youtube.com/iframe_api"></script>
        <script src="https://rawcdn.githack.com/Mr-Kranarong/Hidden-Youtube-Background-Music-JS/0d0d34dbb33614e1c99f85ad9899e2397f17770b/yt.js"></script>
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
          autoplay: 1,
          loop: e.dataset.loop,
          list: e.dataset.playlist,
          playlist: e.dataset.video 
      }
  })
}
