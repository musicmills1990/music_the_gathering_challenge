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
          console.log(newSong)
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
