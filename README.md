# Booklist-ember
A web app developed in Ember.js, node.js(Express), mongoDB. 

###Demo Video###
www.google.com

###Installation###
1. Have [Node](https://nodejs.org/en/), [Ember-cli](http://ember-cli.com/user-guide/), [MongoDB](https://docs.mongodb.org/manual/installation/) installed on machine.
2. Run MongoDB.

    Run following code in command line, you can use `--dbpath` to specify your own data directory
    ```
    mongod
    ```
3. Run Node app. By default, running on port:3000.

    Go to node app directory, run following code.
    ```
    node bin/www
    ```
4. Run Ember app.

    Go to Ember app directory, run following code. Use `--proxy` to foward http request to node app.
    ```
    Ember server --proxy http://localhost:3000
    ```
    
###Functionality###
- Homepage
- Click `Refine` to sort and filter the list
- Click on a book in the list to go to `detail page`
- Click `Edit` to edit a book
- Click `New` to add a new book
- Click `Delete` to delete a book from list

<div>
    <img src="demo-imgs/Screen%20Shot%202016-03-26%20at%204.14.50%20PM.png" alt="Homepage" width="300px"/>
    <p align = "center">Picture 1</p>
</div>
<div>
    <img src="demo-imgs/Screen Shot 2016-03-26 at 4.21.24 PM.png" alt="Homepage" width="305px"/>
    <p align = "center">Picture 2</p>
</div>




