# Backend

contains node js task, mongodb, graphql
from graphql data manipulation and fetching done with mongodb database

# Front end 

Component folder contains all files 
Data fetching and user registration to database with graphql

Backend and frontend connected

# Installation
## In Backend
* npm init -y
* npm install
* npm start

-- graphql starts run in port 4000

### Usage

fetch data:

query{
getUsers{
id,
name,
email
}
}

query{
getUserById(id:"1"){
id,
name,
email
}
}

data mutation:

mutation{
createUser(name:"abc",email:"abc@gmail.com",password:"abc"){
id
}
}

mutation{
updateUser(id:"1",name:"xyzzy",email:"zyx@gmail.com",password:"xyzzy"){
id
}
}

mutation{
deleteUser(id:"1"){
id
}
}

## FrontEnd

npm install
npm start

### usage

initially no data found! if there is no data in db
click register button to add user
enter username and email
next disabled until enter data in textfield
then click next and enter password and click finish
data will get add in mongodb database through graphql query
registered data will show in list 
