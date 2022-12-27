import React, { useState, useEffect, createContext } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";

const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  setDisplayName: () => null,
  displayName: "",
});

function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const value = { currentUser, setCurrentUser, displayName };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
        setDisplayName(user.displayName);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContextProvider, UserContext };
