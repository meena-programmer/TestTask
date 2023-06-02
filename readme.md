# Backend

* contains node js task, mongodb, graphql
* graphql data manipulation and fetching done with mongodb database

# Front end 

* Component folder contains all files 
* Data fetching and user registration to mongodb database with graphql query
* Backend and frontend has connected

# Installation
## In Backend
navigate to backend folder 
* npm init -y
* npm install
* npm start
graphql starts running in port 4000

### Usage

* fetch data:

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

* data mutation:

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

Navigate to Frontend folder

* npm install
* npm start

### usage

* initially no data found! if there is no data in db
* click register button to add user
* enter username and email
* next button has disabled until enter data in textfield
* once enter name & email click next and enter password and click finish
* data will get add in mongodb database through graphql query
* registered data will show in list 
* data fetch through axios from mongodb database with graphql query
