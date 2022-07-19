# Green Thumb Landscape Project


Introduction
------------

Last year I drove by a home with a beautiful front yard. The yard was full of plants with different colors, sizes, and textures. I loved how much that home stood out from the others on the block and was motivated to do the same with my yard. The next weekend I spent more money than I care to admit, on a variety of different plants at my local nursery. I spent hours planting them in my front yard and vividly remember how accomplished and proud I felt when I stood back on the sidewalk and looked at the fruits of my labor. 

Fast forward to today and almost every one of those plants died! Looking back now, I realize that it was incredibly naive of me to think that gardening was as simple as finding a plant I liked at a nursery, and putting it into a hole in the ground. That's why I created this basic landscape app. Hopefully people will learn the very basics about gardening and avoid the same costly mistakes that I made!  



Project Requirements
-----------

- Use a Rails API backend with a React frontend.
- Have at least three models on the backend, that include:
  - at least one one-to-many relationship
  - at least one many-to-many relationship
  - full CRUD actions for at least one resource
- Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
- Implement authentication/authorization, including password protection. A user should be able to log in to the site with a secure password and stay logged in via user ID in the session hash.



Description
-----------

- Users can create accounts, log in, and log out
- The create action of the `SessionsController` looks up a user in the database, verifies their login credentials, and stores the authenticated user id in the session
- Users can view the home and plants page but must authorized before viewing individual plant pages and their landscape page
- Rails uses the bcrypt gem to hash and salt all passwords on the User model
- The home page will provide basic gardening tips and definitions
- The plants page will display all of the plants in the database
- Clicking on a plant in the plants page will take the user to the individual plant page where the authorized user will be able to view specific details about the plant as well as create, read, update, and delete reviews (CRUD)
- The landscape page will show all the plants that the user has left reviews for 



Setup
-----------

First, you will need to fork and clone this repository into a local directory. Once you navigate into the correct file, run:

```console
$ bundle install
```
to download the required dependencies

Then, run:

```console
$ rails s
```
to run the server at http://localhost:3000

Finally, run:

```console
$ npm start --prefix client
```
to open the app at http://localhost:4000



See how it works here
-----------

https://youtu.be/Qe6RitH6mL0


See my deployed app here
-----------

https://green-thumb-landscape.herokuapp.com/


Check out my blog on the Active Record Validations I used in this app here
-----------

https://medium.com/@mterrano1/active-record-validations-5548dc5f616a
