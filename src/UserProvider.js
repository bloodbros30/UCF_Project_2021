
import React, {useState, useEffect} from "react";

import { auth } from "./fire";

export const UserContext = React.createContext()


export default function UserProvider({children}) {
  const [user, setUser] = useState();
  
  useEffect(() => {

        // check local storage to see if we already have user
        const uD = localStorage.getItem("userDetails");
        if (uD) {
            setUser(uD);
        }

        auth.onAuthStateChanged((userDetails) => {
            if (userDetails) {
                const user = { uid: userDetails.uid };
                setUser(user);
                // update local storage
                localStorage.setItem("userDetails", user);
            }
        });
  });

  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}