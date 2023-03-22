# search-app
Sample webapp that uses the wikipedia search API to find articles

This project adheres to Wikipedia usage etiquette guidelines, defined
here: https://www.mediawiki.org/wiki/API:Etiquette

# Building, running and testing

More details exist in each of the backend and frontend folders. 

## Backend

The backend is a simple NodeJS + Express app. This application doesn't
require a database. The server supports multiple run configurations
for dev and prod purposes, and logs to a file in the logs directory. 

Building is simple, use 

    npm install

And then use the respective commands to run

    npm run start-dev

or 

    npm run start-prod

### Launch configurations

Launch configurations are included for VSCode. 

## Frontend

The frontend is a VueJS applications using Vite and Pinia. 

Technically, its possible to do the simple searching with just the frontend,
but for the purposes of the exercise, a backend is also implemented. 

## Tests

See the respective folders for Backend and Frontend to see how to execute the tests. 