import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("retailer-dashboard-user");
  };

  const values = { user, setUser, isLoading, logoutUser };

  // console.log({ user });

  useEffect(() => {
    const getUserFromLocalStorage = localStorage.getItem(
      "retailer-dashboard-user"
    );
    if (getUserFromLocalStorage) {
      setUser(JSON.parse(getUserFromLocalStorage));
    } else {
      setUser(null);
    }

    setIsLoading(false);
  }, []);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
