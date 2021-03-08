import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import { auth, fs } from "./fire";

import "./App.css";


function UserPage() {

  const user = useContext(UserContext);

 if (!user) return <></>;


  console.log(user);
    return(
      <div className = "userCard">
        <div className = "UserImg">

        </div>

        <div className = "usercardInfo">
          <p >
          <strong>Name:</strong> {user.name}
          </p>

        </div>

        <div className = 'row mt'>
          <div className = 'col s12 m6 l6 x l6'>

              <strong>Name:</strong> {user.name}
              <form>
                <label>
                  Name:
                  <input type="text" name="name" />
                  </label>
                  <input type="submit" value="Submit" onChange={(e) => fs.collection('Users').doc(user.uid).update({
                    "name" : e.target.value
                  })} />
              </form>


              <strong>Age:</strong> {user.age}
              <form>
                <label>
                  Age:
                  <input type="text" age="age" />
                  </label>
                  <input type="submit" value="Submit" onChange={(e) => fs.collection('Users').doc(user.uid).update({
                    "age" : e.target.value
                  })} />
              </form>

              <strong>Interests:</strong> {user.interests}
              <form>
                <label>
                  Age:
                  <input type="text" age="age" />
                  </label>
                  <input type="submit" value="Submit" onChange={(e) => fs.collection('Users').doc(user.uid).update({
                    "interests" : e.target.value
                  })} />
              </form>

              <strong>Address:</strong> {user.address}
              <form>
                <label>
                  Address:
                  <input type="text" address="address" />
                  </label>
                  <input type="submit" value="Submit" onChange={(e) => fs.collection('Users').doc(user.uid).update({
                    "address" : e.target.value
                  })} />
              </form>

              <strong>Username:</strong> {user.username}
              <form>
                <label>
                  Username:
                  <input type="text" username="username" />
                  </label>
                  <input type="submit" value="Submit" onChange={(e) => fs.collection('Users').doc(user.uid).update({
                    "username" : e.target.value
                  })} />
              </form>

          </div>
        </div>
      </div>

    );
}
export default UserPage;
