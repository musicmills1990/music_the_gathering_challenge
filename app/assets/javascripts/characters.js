$(() => {
  characterHoverHandlers()
})

const characterHoverHandlers = () => {
  $("#characters-index").hover(e => {
    e.preventDefault();
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
}
function Character(character) {
  this.id = character.id
  this.name = character.name
}

Character.prototype.formatIndex = function(){
  let characterHtml = `
  <li><a href="/characters/${this.id}">${this.name}</a></li>
  `
  return characterHtml
}
