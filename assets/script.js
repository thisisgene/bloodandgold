window.onload = function() {
  console.log('loaded')
  document.getElementById('black-overlay').classList = 'black-overlay loaded'
}

const toggleMute = () => {
  const video = document.getElementById('video')
  const muteButton = document.getElementById('mute-button')
  if (video.muted) {
    video.muted = false
    muteButton.classList = 'mute-button unmuted'
  } else {
    video.muted = true
    muteButton.classList = 'mute-button'
  }
}
