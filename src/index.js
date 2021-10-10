import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap';
import '@popperjs/core';
import $ from 'jquery';

import userFacade from "./userFacade"




//this is get single user by id
const idTable = document.querySelector('table.test')
let id = 1;
userFacade.getPersonById(id, idTable)


//This is get all users
const table = document.querySelector('table')
userFacade.getAllUsers(table)


//this is create user
document.getElementById("addUserButton").addEventListener('click', function () {
  const email = document.getElementById("personEmail").value;
  const firstName = document.getElementById("personFirstName").value;
  const lastName = document.getElementById("personLastName").value;
  const street = document.getElementById("addressStreet").value;
  const zipCode = document.getElementById("addressZip").value;
  const city = document.getElementById("addressCity").value;
  const number = document.getElementById("personPhone").value;
  const name = document.getElementById("personHobby").value;
  const category = document.getElementById("personHobbyCat").value;
  const type = document.getElementById("personHobbyType").value;
  const wikiLink = document.getElementById("personHobbyWiki").value;

  const hobby = {
      "name": name,
      "category": category,
      "type": type,
      "wikiLink": wikiLink,
  }

  const hobbies = [
      hobby
  ]

  const phone = {
      "number": number
  }

  const phones = [
      phone
  ]

  const cityInfo = {
      "zipCode": zipCode,
      "city": city
  }

  const address = {
      "street": street,
      "additionalInfo": "",
      "cityInfo": cityInfo
  }

  const person = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "hobbies": hobbies,
      "phones": phones,
      "address": address,
  }

  console.log(person);
  console.log(JSON.stringify(person));

  userFacade.createPerson(person)

})







function errorHandling(err)
{
  if (err.status)
  {

    err.fullError.then(e =>
    {
      $("#errorMessage").text(e.msg);
      $("#errorModal").modal();
      // err.fullError.then(e => console.log(e.msg))
    })
  }
  else
  {
    $("#errorMessage").text("Network error. The user API is not responding.");
    $("#errorModal").modal();
    // console.log("Network error")
  }
}

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/




// DO NOT REMOVE THESE OR WRITE ANYTHING BEYOND THIS COMMENT.
