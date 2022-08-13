const script = document.createElement('script');
script.innerText = `
window.addEventListener('keydown', function (e) {
  const player = document.querySelector('ytd-player').getPlayer();
  const seconds = 1;
  if (e.keyCode === 85) { // 'u'
    player.seekToStreamTime(player.getCurrentTime() - seconds)
  }
  else if (e.keyCode === 79) { // 'o'
    player.seekToStreamTime(player.getCurrentTime() + seconds)
  }
})
`
document.body.append(script);
console.log('youtube-seconds extension loaded.');