## Npm set up ##

- npm init -y
- npm i express

## Git ignore ##

- touch .gitignore
- nano .gitignore `text editor inside the terminal` and write `node_modules`. Save and exit
- cat .gitignore `check if it's written`

## Git set up ##

- git init
- git add .
- git commit -m "Message"
- git remote add `copy from github`
- git push origin master / ggpush
- git status / gst

## Getting it from GitHub ##

- git clone git@github.com:karlaevelize/clients-52.git
- cd in the folder
- run `npm install`

## Run the server ##

- `npx nodemon server.js` This way you dont have to restart it