import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (user) {
    return children;
  }

  if (!user && !isLoading) {
    return <Navigate to="/retailer/login" />;
  }
};

export default Protected;
