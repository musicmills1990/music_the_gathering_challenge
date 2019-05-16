$(() => {
  newSongFormHandler()
  songClickHandler()
})

//-----song index page using ajax() ----
const songClickHandler = () => {
  $(".navbar-brand#songs-index").on("click", e => {
    e.preventDefault();
    getSongs();
  });
}

const newSongFormHandler = () => {
  $("form#new-song-form.new_song").on("submit", function(e) {
    e.preventDefault();
    const values = $(this).serialize()
    $.post('/songs', values)
    .done(function(data){
      $("#app-container.wrapper").html('Working, now I just need to repaint the DOM')
      let $tune_div = $("div#tune_new_song")
      let $song_div = $("div#song_new_song")
      $tune_div.append(data);
      $song_div.append(data);
    })
  })
}

function getSongs(){
  $.ajax({
    url: '/songs',
    method: 'get',
    dataType: 'json'
  }).done(songs => {
    console.log('the data is: ', songs)
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

const headers = `<h1>Songs and Tunes</h1>`

//same thing as what's below it's just sweeter syntactically (I think)
// function Song(song){
//   this.id = song.id
//   this.name = song.name
//   this.category = song.category
// }

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

const mostWellKnownLink = `
<h2><a href="/most_well_known">Most Well Known Songs</a></h2>
`
const addSongLink = `
<h3><a href="songs/new">Add A New Song</a></h3>
`
