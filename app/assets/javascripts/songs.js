$(() => {
  hoverHandlers()
})

const hoverHandlers = () => {
  $("#songs-index").on('click', (e) => {
    e.preventDefault();
    fetch(`/songs.json`)
      .then(res => res.json())
      .then(songs => {
        $("#app-container.wrapper").html('')
        songs.forEach((song) => {
          let newSong = new Song(song)
          let songHtml = newSong.formatIndex();
          $("#app-container.wrapper").append(songHtml)
      })
    })
  });
}
function Song(song) {
  this.id = song.id
  this.name = song.name
  this.category = song.category
  this.character_songs = song.character_songs
  this.characters = song.characters
}

Song.prototype.formatIndex = function(){
  let songHtml = `
  <h1>${this.name}</h1>
  `
  return songHtml
}
