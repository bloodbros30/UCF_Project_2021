import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import { auth, fs } from "./fire";
import "./UserPage.css";
import Card from './Cards/Cards'

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
  fs.collection('Users').doc(user.uid).set({
    name: name,
    username: username,
    age: age,
    address: address,
    interests: interests
  })
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
          </div>
          <div className="formStyle">
            <h2>Edit Profile</h2>
                      <form id='userForm'>
                      <p>
                        <input type="text" name="name" id='name' placeholder="Name"></input>
                      </p>
                      <p>
                        <input type="text" name="username" id='username' placeholder="Username"></input>
                      </p>
                      <p>
                        <input type="text" name="address" id='address' placeholder="Address"></input>
                      </p>
                      <p>
                        <input type="text" name="age" id='age' placeholder="Age"></input>
                      </p>
                      <p class="full">
                        <input type ="text" name="message" id='interests' placeholder="Interests"></input>
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
              <Card/>
  </body>
);

}
export default UserPage
