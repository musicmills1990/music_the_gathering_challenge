$(() => {
  songClickHandlers()
})

//-----song index page using fetch() ----
const songClickHandlers = () => {
  $("#songs-index").on("click", e => {
    e.preventDefault();
  //  history.pushState(null, null, "characters") <-- creates route /users/characters, which isn't helpful.
    fetch(`/songs.json`)
      .then(res => res.json())
      .then(songs => {
        $("#app-container.wrapper").html('')
        $("#app-container.wrapper").append(headers)
        songs.forEach((song) => {
          let newSong = new Song(song)
          let songHtml = newSong.formatIndex();
          $("#app-container.wrapper").append(songHtml)
      })
      $("#app-container.wrapper").append(newForm)
    })
  });
}
const headers = `
<h1>Songs and Tunes</h1>
`
//I just grabbed the html from my working rails page. I'm sure this could be massively refactored but I want to get the form submission working....//
const newForm = `
<h2>Add A New Song</h2>
<form class="new_song" id="new-song-form" action="/songs" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="jo79SHj5l0MS7ErYvmQq249mVUlyBPpxMvrpxqFfthdoxuuuOsVjqyTwL7/VATG43eY02wCgETR1VFHAxxNz3A==">
  <label for="song_Song_Name">Song name</label>
  <input type="text" name="song[name]" id="song_name"><br>

  <label>Tune (instrumnetal only) or Song?</label>
  <select name="song[category]" id="song_category"><option value="Tune">Tune</option>
<option value="Song">Song</option></select><br>
  <label for="song_Characters who know this song:">Characters who know this song:</label><br>
    <input type="hidden" name="song[character_ids][]" value="">
      <label for="song_character_ids_79">Azia</label>
      <input type="checkbox" value="79" name="song[character_ids][]" id="song_character_ids_79"><br>

      <label for="song_character_ids_80">Liv</label>
      <input type="checkbox" value="80" name="song[character_ids][]" id="song_character_ids_80"><br>

      <label for="song_character_ids_81">Marco</label>
      <input type="checkbox" value="81" name="song[character_ids][]" id="song_character_ids_81"><br>

      <label for="song_character_ids_82">Daniel</label>
      <input type="checkbox" value="82" name="song[character_ids][]" id="song_character_ids_82"><br>

      <label for="song_character_ids_83">Tonya</label>
      <input type="checkbox" value="83" name="song[character_ids][]" id="song_character_ids_83"><br>

      <label for="song_character_ids_84">Dylan</label>
      <input type="checkbox" value="84" name="song[character_ids][]" id="song_character_ids_84"><br>

      <label for="song_character_ids_85">Franka</label>
      <input type="checkbox" value="85" name="song[character_ids][]" id="song_character_ids_85"><br>

      <label for="song_character_ids_86">Droolin Jack</label>
      <input type="checkbox" value="86" name="song[character_ids][]" id="song_character_ids_86"><br>

      <label for="song_character_ids_87">Mad Molly</label>
      <input type="checkbox" value="87" name="song[character_ids][]" id="song_character_ids_87"><br>

      <label for="song_character_ids_88">Lady Victoria</label>
      <input type="checkbox" value="88" name="song[character_ids][]" id="song_character_ids_88"><br>

      <label for="song_character_ids_89">Lady Morgan</label>
      <input type="checkbox" value="89" name="song[character_ids][]" id="song_character_ids_89"><br>

      <label for="song_character_ids_90">Lady Rosaline</label>
      <input type="checkbox" value="90" name="song[character_ids][]" id="song_character_ids_90"><br>

      <label for="song_character_ids_91">Donna Catalina</label>
      <input type="checkbox" value="91" name="song[character_ids][]" id="song_character_ids_91"><br>
  <input type="submit" name="commit" value="Add Song" data-disable-with="Add Song">
</form>`

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
  let songHtml = `
  <li><a href = "/songs/${this.id}">${this.name}</a></li>
  `
  return songHtml
}
