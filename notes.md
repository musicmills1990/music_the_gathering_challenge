I'm about to start on this rails app and I'm not sure exactly what I want to do.

1. *Scratched* Music Lead-Sheets collab site

2. Music The Gathering Challenge Game
  Extending project 1 into an interactive game of music collaboration.
  A user would create an account and login. The creation would be:
  -Name
  -email
  -password
  -MusicMana (similar to tickets, this is the cost of playing the game)
  -Okay unclear as what I want to name things, but I'm thinking that each user will have musical qualities similar to happiness and nausea in the amusement park ride and there will be a "status" function similar to mood, where if their qualities go above a certain number, they go from novice, to intermediate(name it something better) and master of music.

  The home page would be a character index page, with links to each characters show page.
  Characters would have the attributes:
  -Name
  -Description
  -Rhythm score
  -Instrument score
  -Soloing score
  -Vocal score
  -Comedy score
  -Cost (the higher their overall score, the more a character will cost)
  -Songs known

   They would then have the options:
  1. Create a team
  2. Choose a favorite team (save option for previously created teams)

  Create a Team
  This would be a form that allows them to choose three characters from the character index list. This will bring them to a "team" show page that will present those three chosen characters. it will display
  -The team's collective rhythmic, instrument, soloing, vocal, and comedy scores
  -The team's cost of musicmana to perform a given song
  -A list of the songs that all of those characters can perform together,
  underneath each is a button labeled "Perform this Song"

The "perform this song" button is equivalent to "go on a ride", when you click it, it will:
-Go back to the user's show page
-Add the scores to the users XP. (this should be something the user sees so they can decide what songs to choose next time)
-Subtract the cost from the users music mana
-Display their level (if it goes above a certain amount it will change from novice to intermediate, etc.)
-Say "Your band just rocked a brand new version of #{team.song.name}!"

okay so that's the site. WTF models do I need:
-User
-Team
-Character
-Song

a user can have many teams
a user has many characters through a team
a team has many characters (so maybe this is a parent/child nested thing?)
team || many-to-many || character

a character has many songs
a song belongs to a character

a team has songs THROUGH characters....
