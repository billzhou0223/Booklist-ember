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
\u2022 Homepage  - Use "refine" to sort and filter the list

<img src="demo-imgs/Screen%20Shot%202016-03-26%20at%204.14.50%20PM.png" alt="Homepage" width="300px"/>
<img src="demo-imgs/Screen Shot 2016-03-26 at 4.21.24 PM.png" alt="Homepage" width="305px"/>

