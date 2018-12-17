Project 1 - Journal App
---------
###What is it?
I wanted to make an app where users could treat it like their private diary/blog/journal.  It's really just a place to express yourself, take notes, etc.  

####Bonuses
  * Users can attach photos to their posts.
  * Users can tag locations/addresses on map.
  * Text field can have build in menu to format/style their entries. (think Word)


------------
###Packages Installed:
1. Method Override
  * Allows us to use HTTP verbs PUT or DELETE in the forms that normally only accept POST or PATCH
2. EJS Layouts
  * Allows us to embed javascript and html together in one file.
3. Auth packages
  * Bcrypt-nodejs - allows hashing of password
  * Cookie Parser
  * Express-session
  * Passport
  * Passport-local
  * MongoDBStore - takes an instance of express and returns a MongoDBStore class to store sessions in the database
  * Connect-Mongodb-Session - stores sessions
4. Extras
  * Mongoose-type-email - This allows for validation of email in my User model.