
import React, {useState, useEffect} from "react";

import { auth, fs } from "./fire";

export const UserContext = React.createContext()


export default function UserProvider({children}) {
  const [user, setUser] = useState();
  
  
  useEffect(() => {

        // check local storage to see if we already have user
        const uD = localStorage.getItem("userDetails");
        if (uD) {
            setUser(uD);
        }

        auth.onAuthStateChanged(async (userDetails) => {
            if (userDetails) {
                const userRef = fs.collection('Users').doc(userDetails.uid);
                const doc =  await userRef.get();
                const user = { uid: userDetails.uid, ...doc.data() };
                setUser(user);
                console.log("auth changed");
                // update local storage
                localStorage.setItem("userDetails", user);
            }
        });
  }, []);

  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}