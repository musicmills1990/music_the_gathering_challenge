

//////////
// $(document).ready(function(){
//   newSongSubmitHandler();
// });
// //------>>>><<<<-------//
//     //codealonging without understanding why I can't hijack a page that doesn't have the same stuff on it that characters.js has ??//
//     $("#new-song-form").on("submit", function(e){
//       e.preventDefault
//       console.log("submitting new song")
//       const values = $(this).serialize()
//       $.post('/songs', values)
//         .done(function(data){
//           $("#app-container.wrapper").html('')
//           const newSong = new Song(data)
//           const htmlToAdd = newSong.formatIndex()
//           $("#app-container.wrapper").html(htmlToAdd)
//         })
//     });
//
//     //------>>>><<<<-------//
//
// function Song(song){
//   this.id = song.id
//   this.name = song.name
//   this.category = song.category
// }
//
// Song.prototype.formatIndex() = function(){
//   let songHtml = `
//   <h1>this should be the new songs page?</h1>`
// }
//
