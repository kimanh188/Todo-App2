import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChangeListener } from "../firebase/auth/auth.listener.jsx";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = useMemo(() => {
    return { currentUser, setCurrentUser };
  }, [currentUser]);

  useEffect(() => {
    onAuthStateChangeListener(async (user) => {
      setCurrentUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
