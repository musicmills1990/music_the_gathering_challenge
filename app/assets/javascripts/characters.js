$(() => {
  characterHoverHandlers()
})
//-----character index page using fetch() ----
const characterHoverHandlers = () => {
  $("#characters-index").on('click',e => {
    e.preventDefault();
    history.pushState(null, null, "http://localhost:3000") //creates route /users/characters, which isn't helpful.
    fetch(`/characters.json`)
      .then(res => res.json())
      .then(characters => {
        $("#app-container.wrapper").html('')
        $("#app-container.wrapper").append(pageHeader)
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
    history.pushState(null, null, "http://localhost:3000") //creates route /users/characters, which isn't helpful.
    let id = ($(this).attr('data-id'));
    fetch(`/characters/${id}.json`)
      .then(res => res.json())
      .then(character => {
        console.log(character)
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
  <p><a href="/characters/${this.id}" data-id="${this.id}" class="character-js">${this.name}</a><p>
  `
  return characterHtml
}

Character.prototype.formatShow = function(){
  let characterHtml = `
  <h1>${this.name}</h1>
  <h2>Member of ${this.description}</h2>
  <h3>STATS & ABILITIES</h3>
    <li>Rhythmic: ${this.rhythm_score}</li>
    <li>Instrumental: ${this.instrument_score}</li>
    <li>Vocal: ${this.vocal_score}</li>
    <li>Comedic: ${this.comedy_score}</li>

    <li><strong>Cost to play: ${this.music_mana_cost}</strong></li>
    <a href="/characters/${this.id}/comments">${this.name}'s Comment Page</a>
  `
  return characterHtml
}

const pageHeader = '<h1>Characters</h1>'


//can't get any of this in the show page because it's complicated and not required
// <h4>!!!Need to add picture here!!!!</h4>
// <h3>Songs Known:</h3>
// <li>${this.songs}</li>
// <p> how do I iterate over the character's songs for this? </p>
