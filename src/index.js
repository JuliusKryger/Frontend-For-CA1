import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap';
import '@popperjs/core';
import $ from 'jquery';

import userFacade from "./userFacade"




//this is get single user by id
document.getElementById("getUserButton").addEventListener('click', function () {
  const id = document.getElementById("idValue").value
  const idTable = document.querySelector('table.styled-table2')
  userFacade.getPersonById(id, idTable)
})


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


//THIS IS FOR OUR UPDATE USER METHOD





document.getElementById("updateUserButton").addEventListener('click', function () {


  const id2 = document.getElementById("idValueU").value
  var person2;
  person2 = userFacade.getPersonByIdNoDom(id2)
  console.log(person2)

  function setInputValue(id2, person2) {
    const email = document.getElementById("personEmail2").setAttribute('value', person2.email);
    const firstName = document.getElementById("personFirstName2").setAttribute('value', person2.firstName);
    const lastName = document.getElementById("personLastName2").setAttribute('value', person2.lastName);
    const street = document.getElementById("addressStreet2").setAttribute('value', person2.address.street);
    const zipCode = document.getElementById("addressZip2").setAttribute('value', person2.cityInfo.zipCode);
    const city = document.getElementById("addressCity2").setAttribute('value', person2.address.cityInfo.city);
    const number = document.getElementById("personPhone2").setAttribute('value', person2.phones[0].number);
    const name = document.getElementById("personHobby2").setAttribute('value', person2.hobbies[0].name);
    const category = document.getElementById("personHobbyCat2").setAttribute('value', person2.hobbies[0].category);
    const type = document.getElementById("personHobbyType2").setAttribute('value', person2.hobbies[0].type);
    const wikiLink = document.getElementById("personHobbyWiki2").setAttribute('value', person2.hobbies[0].wikiLink);
  
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
  }
  setInputValue()

})





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


//This is the code for our delete method
document.getElementById("deleteUserButton").addEventListener('click', function () {
  const id = document.getElementById("deleteValue").value
  userFacade.deletePersonById(id)
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
