# Formyou - book a course !
### React Front website of the From You app
(check it out at `https://formyou.herokuapp.com/`)
(use it with the API at `https://api-formyou.herokuapp.com/`)

##### To be used with the [associated Rails API](https://github.com/cha-fa/api_formyou.git)

## Users 

* this website is a e-learning platform lookalike
* Users starts at the home page witch provide informations about courses
* Users can register and have to be approved by an admin
* Users then are able to book courses, and manage their profiles
* Teachers are assigned to classes and courses and are able to check their calendar on their profiles
* Admins can approve Users and Teachers, manage Users and Courses

## Description

* Authentification 
* Redux (authentication and flashmessages)
* React Router with public and privates routes
* Basic Layout (navbar, flashmessages, footer)
* Cookies Js
* React Icons
* Big Calendar
* Useanimations
* Bootstrap

## Usage in Production 

Visit us at `https://formyou.herokuapp.com/

## Test Users:

  email: 'student@yopmail.com'
  password: 'fakerstudent'

  email: 'admin@yopmail.com',
  password: 'fakeradmin',

  email: 'teacher@yopmail.com',
  password: 'fakerteacher',

## Usage in Development

Clone this repository  
Create a .env with `REACT_APP_API_URL="http://localhost:8080"`    
`yarn install`  
`yarn start`  
Your app will be running on `http://localhost:3000`  



