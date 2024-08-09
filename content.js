window.addEventListener('keydown', function (e) {
	const player = document.querySelector('ytd-player').getPlayer();
	switch (e.key) {
		case 'u':
			player.seekToStreamTime(player.getCurrentTime() - 2);
			break;
		case 'i':
			player.seekToStreamTime(player.getCurrentTime() - 1);
			break;
		case 'o':
			player.seekToStreamTime(player.getCurrentTime() + 1);
			break;
		case 'p':
			player.seekToStreamTime(player.getCurrentTime() + 2);
			break;
		default:
			return;
	}
	e.stopPropagation();
})
console.log('youtube-seconds extension loaded.');