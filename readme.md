Project 1 - Journal App
---------
###What is it?
----------------
I wanted to make an app where users could treat it like their private diary/blog/journal.  It's really just a place to express yourself, take notes, etc.  

###Technologies Used:
------------
HTML | CSS | JS | MongoDB | Express | Node.js | Bootstrap | jQuery | Git | Trello


### ERD (Entity Relational Diagram)
--------------
![Screen Shot 2018-12-20 at 5.57.42 PM](https://i.imgur.com/ZpZmZ6G.png)

### Install Server
--------------------
1. npm init -y in root folder
2. npm install --save express
3. --save dotenv
4. --save mongoose
5. --save connect-mongodb-session


###Packages Installed:
-------------------
1. Method Override
  * Allows us to use HTTP verbs PUT or DELETE in the forms that normally only accept POST or PATCH
2. EJS Layouts
  * Allows us to embed javascript and html together in one file.
3. Auth packages
  * Bcrypt-nodejs - allows hashing of password
  * Cookie Parser - parses cookie header and populate req.cookies with object keyed by cookie names
  * Express-session
  * Passport
  * Passport-local
  * MongoDBStore - takes an instance of express and returns a MongoDBStore class to store sessions in the database
  * Connect-Mongodb-Session - stores sessions
4. Extras
  * Mongoose-type-email - This allows for validation of email in my User model.
  * moment - I used this to populate forms with dates. (create new entry / edit entry)

  
---------

### My Wireframe
Landing Page
![Screen Shot 2018-12-17 at 9.06.05 AM](https://i.imgur.com/ZiBNu6V.png)

Login Page
![Screen Shot 2018-12-17 at 9.06.19 AM](https://i.imgur.com/3mWbdmP.png)

Signup Page
![Screen Shot 2018-12-17 at 9.06.30 AM](https://i.imgur.com/rvZupOU.png)

Profile Page
![Screen Shot 2018-12-17 at 9.07.01 AM](https://i.imgur.com/xOBPAzo.png)

New Entry Page
![Screen Shot 2018-12-17 at 9.07.11 AM](https://i.imgur.com/pvLg7r7.png)

A link to my trello page [here](https://trello.com/b/xeCfbz9l/p1)
OR a screenshot below:
![Screen Shot 2018-12-20 at 6.02.37 PM](https://i.imgur.com/UO3Obmv.png)

--------------

### Screenshots

Landing Page
![Screen Shot 2018-12-20 at 7.29.53 PM](https://i.imgur.com/SUGRNWb.png)
Signup Page
![Screen Shot 2018-12-20 at 7.40.28 PM](https://i.imgur.com/zr8IH5K.png)
Profile Page
![Screen Shot 2018-12-20 at 7.32.16 PM](https://i.imgur.com/OXm4cDN.png)
Edit Entry Page
![Screen Shot 2018-12-20 at 7.32.33 PM](https://i.imgur.com/IGxPhyf.png)
New Entry Page
![Screen Shot 2018-12-20 at 7.32.48 PM](https://i.imgur.com/YRARpo5.png)

----------------

### Some Problems I ran into:

1. separation of concerns between routers and controllers
2. being able to test routes in Postman with auth
3. abstracting functions into routers/controllers
4. figuring out how cookies work and how they store the user_id
5. Understanding how data was being referenced between files!
6. Linking external css 
7. Getting the text area to accept line breaks
8. Populating form fields with existing information when rendering the edit entry page


----------
### Things I didn't get to do/finish
1. Verify email field with regex
2. Add a search by keyword / date field in profile view
3. Could not get the date to display properly
4. Could not get whitespace to transfer properly
![Screen Shot 2018-12-20 at 6.49.20 PM](https://i.imgur.com/pKo0kOr.png)
vs
![Screen Shot 2018-12-20 at 6.50.24 PM](https://i.imgur.com/3iNjmr5.png)
5. Never got to implement picture upload via AWS or add text styling menu
6. Did not get to implement tagging locations via Google Maps