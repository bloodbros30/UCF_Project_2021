import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import { auth, fs } from "./fire";

import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import "./App.css";


function UserPage() {

  const user = useContext(UserContext);
  console.log(user);

  function SubmitForm(e) {
      console.log(123)
      var name = getInputVal('name');
      var username = getInputVal('username');
      var age = getInputVal('age');
      var address = getInputVal('address');
      var interests = getInputVal('interests');
      saveInfo(user, name, username, age, address, interests);
    }

function getInputVal(id){
  if(document.getElementById(id))
  return document.getElementById(id).value;
}
function saveInfo(user, name, username, age, address, interests){
  console.log(user.uid);
  fs.collection('Users').doc(user.uid).update({
    name: name,
    username: username,
    age: age,
    address: address,
    interests: interests
  })
}
  return(
  <body>
      <div className="container">
        <div className="wrapper">
          <div className="company-info">
            <h3>Edit Profile</h3>
          </div>
          <div className="contact">
                      <form id='userForm'>
                      <p>
                        <label>Name</label>
                        <input type="text" name="name" id='name'></input>
                      </p>
                      <p>
                        <label>Username</label>
                        <input type="text" name="username" id='username'></input>
                      </p>
                      <p>
                        <label>Address</label>
                        <input type="text" name="address" id='address'></input>
                      </p>
                      <p>
                        <label>Age</label>
                        <input type="text" name="age" id='age'></input>
                      </p>
                      <p class="full">
                        <label>Interests</label>
                        <input type ="text" name="message" id='interests'></input>
                      </p>
                        <p class="full">
                        <button type="submit"
                        onClick = {SubmitForm}
                        >Submit</button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
  </body>
);

}
export default UserPage
