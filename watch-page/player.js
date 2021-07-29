$(document).ready(function() {
    function createPlaylistCard(obj, pos) {
        // <div id="card3" class="playlist-card">
        //     <img class="thumbnail" src="https://i.vimeocdn.com/video/726986673_390x220.webp" />
        //     <h3 class="video-card-title">The Heart of Soba</h3>
        // </div>

        var mainDiv = document.createElement('div');
        mainDiv.id = 'card' + obj.id;
        mainDiv.className = 'playlist-card';

        var thumbnail = document.createElement('img');
        thumbnail.src = obj.thumbnail;
        thumbnail.className = 'thumbnail';

        var title = document.createElement('h3');
        title.className = 'video-card-title';
        title.innerHTML = obj.title;

        mainDiv.appendChild(thumbnail);
        mainDiv.appendChild(title);

        mainDiv.addEventListener("click",function(){
            var http = new XMLHttpRequest()

            http.onreadystatechange = function(){
                if(this.readyState === 4){
                    var response = JSON.parse(this.responseText)

                    var videoPlayer = document.getElementById("video-player")
                    videoPlayer.src = 'https://player.vimeo.com/video/' + response.vimeoId
                    
                    var videoTitle = document.getElementById("video-title")
                    videoTitle.innerHTML = response.title;

                    var videoDescription = document.getElementById("video-description")
                    videoDescription.innerHTML = response.description;

                    var viewsCount = document.getElementById("views-count")
                    viewsCount.innerHTML = response.views

                }
            }

            http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/video/" + obj.id ,true)
            http.send()
        })

        return mainDiv;
    }

    var playlistWrapper = $('#playlist-wrapper')



    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",function(data,status){

        for(i = 0 ;i < data.length ; i++){
            playlistWrapper.append(createPlaylistCard(data[i]))
            // console.log(data[i]);

        }
    })
    
});