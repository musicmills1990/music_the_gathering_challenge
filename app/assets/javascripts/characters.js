$(() => {
  characterHoverHandlers()
})

//-----character index page using fetch() ----
const characterHoverHandlers = () => {
  $("#characters-index").hover(e => {
    e.preventDefault();
  //  history.pushState(null, null, "characters") <-- creates route /users/characters, which isn't helpful.
    fetch(`/characters.json`)
      .then(res => res.json())
      .then(characters => {
        $("#app-container.wrapper").html('')
        characters.forEach((character) => {
          let newCharacter = new Character(character)
          let characterHtml = newCharacter.formatIndex();
          $("#app-container.wrapper").append(characterHtml)
      })
    })
  });
//-----character show page using fetch() ----
  $(document).on("click", ".character-js", function(e) {
    e.preventDefault();
    let id = ($(this).attr('data-id'));
    fetch(`/characters/${id}.json`)
      .then(res => res.json())
      .then(character => {
        $("#app-container.wrapper").html('')
        let newCharacter = new Character(character)
        let characterHtml = newCharacter.formatShow();
        $("#app-container.wrapper").append(characterHtml)
    })
  })
}


function Character(character) {
  this.id = character.id
  this.name = character.name
  this.description = character.description
  this.rhythm_score = character.rhythm_score
  this.instrument_score = character.instrument_score
  this.vocal_score = character.vocal_score
  this.comedy_score = character.comedy_score
  this.music_mana_cost = character.music_mana_cost
  this.songs = character.songs
}

Character.prototype.formatIndex = function(){
  let characterHtml = `
  <li><a href="/characters/${this.id}" data-id="${this.id}" class="character-js">${this.name}</a></li>
  `
  return characterHtml
}

Character.prototype.formatShow = function(){
  let characterHtml = `
  <h1>${this.name}</h1>
  <h2>Member of ${this.description}</h2>
  <h4>Need to add picture here</h4>
  <h3>STATS & ABILITIES</h3>
    <li>Rhythmic: ${this.rhythm_score}</li>
    <li>Instrumental: ${this.instrument_score}</li>
    <li>Vocal: ${this.vocal_score}</li>
    <li>Comedic: ${this.comedy_score}</li>

    <li><strong>Cost to play: ${this.music_mana_cost}</strong></li>
    <h3>Songs Known:</h3>
    <li>${this.songs}</li>
    <p> how do I iterate over the character's songs for this? </p>
    <a href="/characters/${this.id}/comments">${this.name}'s Comment Page</a>

    <form class="new_song" id="new-song-form" action="/songs" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="8sd+mF+xEuGupYcksszGv2THi6g/iIMQ36YPGRRRVDoUj2h+HY3mCZi54kPZqd3cNkfqOk0saFWYCLcfch2R8Q==">
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
    </form>

  `
  return characterHtml
}
