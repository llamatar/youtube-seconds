window.addEventListener('keydown', function (e) {
  const player = document.querySelector('ytd-player').getPlayer();
  const seconds = 2;
  if (e.key === 'u') {
    player.seekToStreamTime(player.getCurrentTime() - seconds)
  }
  else if (e.key === 'p') {
    player.seekToStreamTime(player.getCurrentTime() + seconds)
  }
})
console.log('youtube-seconds extension loaded.');