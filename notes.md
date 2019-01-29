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
a song has many characters that sing the same song...
song || many-to-many || character

a team has songs THROUGH characters....




Rails Project Checklist of Requirements

1. A summary of the application

This is an interactive fan game for my entertainment business’s brand. It will in part serve as a database for song knowledge of each character. When a user creates an account they will choose how much “Music Mana” they would like to “buy”.  These will act like tickets that allow them to make choices during the game. The users homepage will have the option to “create a team” or “choose from a saved team” if they have already created teams before. This will allow them to choose three different musicians from any band and put together their own custom Renaissance band. Each Character will have different 4 music attributes, a list of songs they know, and their mana cost. The more talented a character, the higher the cost. Once a user has selected their team, it will bring them to a team page, with combined musical attribute points that they stand to gain, the total price it will cost them to play a song with their team, and a list of the songs that each of the three band members know collectively with a “perform this song” button. When they chose the song, it will add the XP points to their profile, subtract the MusicMana cost, and display a message saying “Your band played the song!”


2. What will your models and associations be and why? You will need a has_many and belongs_to relationship as well as a many to many relationship.

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


3. How will you implement a user submittable attribute on the join table of the many to many relationship?
So if the many to many relationship is Team_Characters, since that is a many to many relationship, it could be a "Team Count" feature, which could display the number of teams a user has created, as well as the number of teams that a character is on.



4. What it is an ActiveRecord scope method and what is your implementation plan?
	Filter, using a search box would query a specific amount of info
	Song filter search bar check out tutorials

5. What validations will you have for your models?

user:
-presence of all attributes
-uniqueness of email
-has secure password

team:
-must have exactly 3 characters

character:
-must have at least 1 song

song:
-name must be unique


6. How will you implement an authentication system?
	I want to learn about devise so I might try using that...

7. What 3rd party login service will you use?
-facebook

8. With the way your models are setup what nested routes will you use to meet the requirement?

-I think it's gonna be the teams/characters will be nested as parent/child but I'm not sure #NO sorry that doesn't work.
In order to do something nested I think I'll have to add another class, but I don't necessarily want it to become more complicated. For simplicity's sake I think I'll make it a comments model so users can write something clever about their fav characters.
