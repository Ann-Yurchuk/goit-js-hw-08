import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('play', function() {
    console.log('played the video!');
});

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


 const onPlay = data => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}; 


player.on('loaded', function () {
        if (localStorage.getItem("videoplayer-current-time")) {
            player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
        }
    });

player.on('timeupdate', throttle(onPlay, 1000));

