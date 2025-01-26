import { createContext, useContext, useState } from "react";
import { registerUserRequest, loginUserRequest, logoutRequest } from "../api/user.api.js";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider")
  }
  return context;
}

/* Entonces ahora UserContext nos va a permitir crear un componente con dentro mas componentes */
export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState({});

  const registerUser = async (user) => {
    try {
      await registerUserRequest(user)
    } catch (error) {
      console.log(error)
    }
  };

  const loginUser = async (user) => {
    try {
      await loginUserRequest(user)
    } catch (error) {
      console.log(error)
    }
  };

  const logoutUser = async (user) => {
    try {
      await logoutRequest()
    } catch (error) {
      console.log(error)
    }
  };

  return <UserContext.Provider value={{ registerUser, loginUser, logoutUser }}>
    {children} {/* Este children es todos los componentes porque no especificamos */}
  </UserContext.Provider>
}