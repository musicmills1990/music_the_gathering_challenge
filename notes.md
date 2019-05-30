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


TO DO LIST
So far I have:
1. an secure_password login system, a fully structured environment
2. a user environment where they can see their XP points, their status, and they have an option to make a new team or choose from their fav teams in the nav bar.
3. there's a dynamic list of characters that are seeded for the purposes of this project, but for additions I could see extending this by adding an admin function where someone can add a new character or update the song list.
4. I began stubbing out the comments child underneath each character and it leads to a nested routing system successfully.

Next Steps (instead of blindly moving forward like I tend to do:)

5. [X*] I want to build the new comment form right on the comment show page, so each set of comments only pertain to a particular character (look at the code for Avi's TODOMVC video)
6. [X] Once comments are working, I'd like to seed in the songs (or maybe it's easier to build a simple new songs form so you can front end it so you don't have to build that later on...) DECISION --> build a new song form and a songs index page
7. Figure out how to connect the characters to the songs they know.
8. Once characters know their songs, build a function (where? maybe in the team model?????) that tells you all of the commonly known songs among any THREE characters (this will take some googling/asking for help)
9. Build the team controller out, a new team form should be a click button list of characters, then once it's posted, it should lead to a team show page that A. Has the three characters listed, B. Has the "songs known" list with a "perform this song" button next to it, C. Has "total XP to gain" and D. "total MusicMana cost" on the page.
10. Figure out how the "perform this song" function will work and where it can be built, but the function will be similar to the "take a ride" function in amusement park, where it will redirect to the user's profile page, will add XP to their profile, subtract the cost, and flash a message saying something like "that rocked! Your team just played song_12!"
11. The thing I don't care about or want: The scope method. Making a search bar of some kind to I guess filter the songs?? We'll get there when we get there.


5* -> the nested comment routes work, and there's in theory a comments index page and new form nested onto each character but the comments wont persist to the database

7* -> I might need to go back and read more about complex relationships. I am trying to add the collection_select form helper to my new song form but I don't know what I'm doing wrong to get the error:
Could not find the association :charactersong in model Song
since my models are set up with joins table models and I believe their associating to each other properly.
8* -> I have a feeling once I understand whats up with the many-to-many relationship I should be able to make that function fairly easily (on the teams model as a function I think but I'm not there yet)
This is complex and hell! As per usually I've bitten off more than I can handle and I'll have to figure it out as I go .


OKAY. OOF. This is a big project. I think I have the basis of a many-to-many relationship working. The nested route relationship is close to working and I think the lab I have open has a good example to figure out why that's not working exactly. Tommorrow I need to:
  A. [X] Display the information on both sides of the Character and song show pages
  B. [O] Fix the bugs associated with the comments form
  C. [X] Start looking at user validation
  D. [X] Build out the team class and controllers
  E. [X] Figure out this fucking scope method thing
  F. [X] I'll eventually get to the methods "Perform a song" and "Song Count"
  G. [X/0] OAuth to sign in through facebook
  G. [X] Styling!



  debugging:
  [X] go to the complex asscociations lab, run rails server and check params to see if it has a characters equiv sub category
  luisa's project recipe finder <-- look at this for scope method example...
  B. Idk I have to look at more examples of nested comment OKAY SO I'VE TRIED A TON OF DIFFERENT THINGS AND I STILL CAN'T FIGURE IT OUT SO MOVE ON.
cool! command + / comments out the line!
  - I have the same problem on both the submitting of the teams creation page and the comments add page. So I'm doing something wrong in both places.
- for a belongs to/has many relationship the user must be valid in order to save information to the child
- add current user to have team work


  questions for office hours:
  1. I have the same problem on both the submitting of the teams creation page and the comments add page. So I'm doing something wrong in both places.
  2. Does that feature idea make sense? 4 "Team Styles" (stubbed out in new_team_path)


Things that still need to happen:
1. [X] Songs in common method
2. [X]  Perform that song method
3. [X] Scope method
4. [X] Error messages
5. [X/0] OAuth
6. [X] User submittable attr on joins table



songs in common method
-a team has access to the characters in it....
-each character has access to the songs they know
-logic could say "take a team (object), grab the three characters, then grab all the songs they know. Then remove all the songs that are not known by all three characters..."
makes sense that this will go in the team model




In order of priority for office hours:

1.[X] Questions about OmniAuth:
  A. My callback to facebook is working but I'm not being logged in. It callsback to the URL "localhost:3000/#_=_".
  B. If a user has to sign up through the site in order to add their "music mana", then what part of the facebook login process allows them to connect with that user profile they've already set up locally?


Final thoughts:
1.
  A. I need to refactor that common_songs method now, especially since it's not REALLY working properly when you choose more than 3 characters (it brings up buttons and allows characters to perform but its sometimes not accurate)
  B. I need a validation for Team like "validates :characters, length: {is: 3}", so that you can't choose more than 3 characters for a team, but since characters is not an attribute of Team I'm not sure how to do it....

2. I removed accepts_nested_attributes_for from comments model, after reading more about it, it didn't seem necessary, and when I commented it out, the comments page is still fully functional.
3. Although users can see each others comments, I would like to have a "written by user.username" line underneath each one but I need to build logic in the controller related to @current_user

4. Very interesting...if I add the required_logged_in helper method on users#show page, I am able to "perform" a song and it runs the functions to affect the user's stats, but instead of displaying the message "boom! Team just collaborated..." it says "must be logged in to view this page". Not sure why considering the person is logged in when that happens... but if I remove it I leave the person's profile to URL hacking.



<!-- 1. pull a rails view over using ajax,
2.create that html in a custom js function,
3. use a handlebar template and park your html
on an html page and refer to it using handlebar tags-->


PLANS FOR ADDING DOM MANIPULATION FEATURES TO THIS PROJECT

1. Index page: the songs list appears upon clicking the top button without refreshing the page
2. Show page: the character show page appears upon clicking on the link from the index page without refreshing the page
3. Has-many relationship: This can be the comments on each character page can be added without a refresh 
4. Submitting a form: I would like to submit the new song form via Ajax so that the new form opens up when you click “add a new song” on the song index page, then when you submit it adds that dynamically to the index page above 
<-- 4 could be simpler if you first refactor the new song page onto the songs index page like how you have it for the comments form, rather than adding another ajax script to pull that on for you. -->

need to:
generate serializers
add active record serializer gem to my gemfile
read other examples to understand how class objects will be used for your project



Okay update 7:20pm on 5/14/19:
1. index page JS manipulation: working pretty well, just needs to figure out how to add the title "Characters" above the list.
2. show page, not sure how to dynamically add the image, not sure how to iterate properly to recieve the songs known attribute.
3. has-many relationship: haven't tackled yet, figured if I could get the song form to submit then I could follow the same format
4. since I want to just hijack the form on the songs index page and i don't want to redraw the entire songs dom just so that I'm in the same format as the characters page (which is how the study group example is constructed), I can't figure out what I need to do to snag that form submission.

I think I'm following ES6 guidelines and stuff so that shouldn't be a problem.






Notes and problems as of 3:48pm on 5/16/2019

GENERAL ISSUE:
[X] ******fixed with pushState and just used the localhost:3000**** Routes sometimes get messed up after clicking around for a while.



1.Index: Characters page
-characters page should probably be switched to a click event since you can still access that click event (but it's helpful to have access to the rails page for now)
-the forEach loop doesn't allow me to number the list of names properly, so right now only bullet points
2.Show: Character individual pages
-can't figure out how to load pictures from the local path dynamically in JS
-can't figure out how to iterate over the array of "songs known" by a character (displayed on the page as objectobjectobject right now)
3. Submit Form: Adding a new song via Ajax
-I'm receiving the info via ajax and have it in JSON but I can't figure out how to repopulate the DOM given that the songs index page is also an JS generated page
4. Has many relationship: Adding comments to a character's comment page
<!-- -It for some reason is receiving the entire page (including the newly submitted comment so I guess that's good) and appending that to the page instead of just a single comment.
*****update****** I figured since the res is too much information but the info I want is in there, I tried following the pattern to get just the new comment li to append to the list by creating comment constructor objects and creating a prototype method with just the "name" of the comment (which is really just the content). I'm much closer! It's just appending undefined for now, but when the page is refreshed the new comment is there...
*****another update*****
I got it! I just had to change the controller back to render json -->
-the button is clicked/unclickable after I submit the comment


***here's a cool custom rake task from smithwebtek dude's studygroup session:
it would go in lib/tasks labeled "whatever.rake" and to use it you call "rake db:whatever"

namespace :db do
  desc 'Drop, Create, Migrate, Seed db, Start rails server'
  task dcms: :environment do
    puts 'dropping db....'
    Rake::Task['db:drop'].invoke

    puts 'creating db....'
    Rake::Task['db:create'].invoke

    puts 'running migrations ....'
    Rake::Task['db:migrate'].invoke

    puts 'seeding db ....'
    Rake::Task['db:seed'].invoke

    puts 'starting rails server ....'
    exec('rails s')    
  end
end
