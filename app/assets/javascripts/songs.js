$(() => {
  newSongFormHandler()
  songClickHandler()
})

//-----song index page using ajax() ----
const songClickHandler = () => {
  $(".navbar-brand#songs-index").on("click", e => {
    e.preventDefault();
    history.pushState(null, null, "http://localhost:3000") //if I make the third argument "songs" as per the video example, it creates route /users/characters, which isn't helpful.
    getSongs();
  });
}

function getSongs(){
  $.ajax({
    url: '/songs',
    method: 'get',
    dataType: 'json'
  }).done(songs => {
      $("#app-container.wrapper").html('')
      $("#app-container.wrapper").append(headers)
      songs.forEach((song) => {
        let newSong = new Song(song)
        let songHtml = newSong.formatIndex();
        $("#app-container.wrapper").append(songHtml)
    })
      $("#app-container.wrapper").append(mostWellKnownLink)
      $("#app-container.wrapper").append(addSongLink)
  })
}

const newSongFormHandler = () => {
  $("form#new-song-form.new_song").on("submit", function(e) {
    e.preventDefault();
    history.pushState(null, null, "http://localhost:3000")
    const values = $(this).serialize()
    $.post('/songs', values)
    .done(function(data){
      $("#app-container.wrapper").html('')
      // getSongs();//put the new data OR
      let newSong = new Song(data)
      let songHtml = newSong.submitNewSong();
      $("#app-container.wrapper").html(songHtml)
      //but for UX design I would way rather have the first option...
    })
  })
}


const headers = `<h1>Songs and Tunes</h1>`

class Song {
  constructor(song) {
    this.id = song.id
    this.name = song.name
    this.category = song.category
  }
}

Song.prototype.formatIndex = function(){
  let songHtml = `<div id="new_song">
  <li><a href = "/songs/${this.id}">${this.name}</a></li>
  </div>`
  return songHtml
}

Song.prototype.submitNewSong = function(){
  let newSongHtml = `
  <p>Congrats! You added a new song!</p>
  <h1>${this.name}</h1>
  <h2>${this.category}</h2>
  `
  return newSongHtml
}

const mostWellKnownLink = `
<h2><a href="/most_well_known">Most Well Known Songs</a></h2>
`
const addSongLink = `
<h3><a href="songs/new">Add A New Song</a></h3>
`
