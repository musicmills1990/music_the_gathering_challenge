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
          console.log(song)
      })
    })
  });
}
