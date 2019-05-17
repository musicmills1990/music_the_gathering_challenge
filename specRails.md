Specifications for the Rails Assessment
Specs:

 [X]Using Ruby on Rails for the project

 [X]Include at least one has_many relationship (x has_many y; e.g. User has_many Recipes)
 A User has_many Teams. A Character has_many Songs, etc.

 [X]Include at least one belongs_to relationship (x belongs_to y; e.g. Post belongs_to User)
 A Comment belongs to a Character

 [X]Include at least two has_many through relationships (x has_many y through z; e.g. Recipe has_many Items through Ingredients)
 1. A Character has many Teams through character_teams, 2. A Song has many Characters through character_songs

 [X]Include at least one many-to-many relationship (x has_many y through z, y has_many x through z; e.g. Recipe has_many Items through Ingredients, Item has_many Recipes through Ingredients)
 1. A Character has many Songs and A Song belongs to many Characters, 2. A Team has many Characters and a Character can belong to multiple Teams

 [X]The "through" part of the has_many through includes at least one user submittable attribute, that is to say, some attribute other than its foreign keys that can be submitted by the app's user (attribute_name e.g. ingredients.quantity)
 1. The Perform class connects Teams and Users, and has the attribute "song_choice", which allows the User to choose a song from the common_songs method on the Team model

 [X]Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)
 1. Multiple validations on User, one validation on Team

 [X]Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)
 1. Scope method called "most_well_known" that creates a list of how many characters know each song in descending order

 [X]Include signup (how e.g. Devise)
 1. Built standard signup method with salted and hashed has_secure_password, uses BCrypt

 [X]Include login (how e.g. Devise)
 1. Built standard login method with salted and hashed has_secure_password, uses BCrypt

 [X]Include logout (how e.g. Devise)
 1. Built standard logout method with salted and hashed has_secure_password, uses BCrypt

 [0]Include third party signup/login (how e.g. Devise/OmniAuth)
 1. Still working on making this work.

 [X]Include nested resource show or index (URL e.g. users/2/recipes)
 1. Comments are nested under characters

 [X]Include nested resource "new" form (URL e.g. recipes/1/ingredients/new)
 1. You can create a new comment through a new form on the Character's comment index page

 [X]Include form display of validation errors (form URL e.g. /recipes/new)
 Confirm: Yeah there is a standard method of calling the errors object.

 [X]The application is pretty DRY
 Everything except these clunky methods in my Team model.

 [X]Limited logic in controllers
 Check.

 [X]Views use helper methods if appropriate
 Yes I use several

 [X]Views use partials if appropriate
 I used one for displaying the scope method called _songs_display.html.erb
