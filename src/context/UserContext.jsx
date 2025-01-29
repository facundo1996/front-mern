import { createContext, useContext, useState, useEffect  } from "react";
import { registerUserRequest, loginUserRequest, logoutRequest, verifyUserRequest } from "../api/user.api.js";

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

    // Verificar el usuario al iniciar la app
    useEffect(() => {
      async function checkUser() {
        try {
          const res = await verifyUserRequest();
          setUser(res.data); 
        } catch (error) {
          setUser({}); 
        }
      }
      checkUser();
    }, []);

  const registerUser = async (user) => {
    try {
      await registerUserRequest(user)
    } catch (error) {
      console.log(error)
    }
  };

  const loginUser = async (user) => {
    try {
      const result = await loginUserRequest(user);
      setUser(result.data);
      return result.data;
    } catch (error) {
      return error.response?.data || { error: "Error Login" }; 
    }
  };

  const logoutUser = async (user) => {
    try {
      await logoutRequest()
    } catch (error) {
      console.log(error)
    }
  };

  return <UserContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
    {children} {/* Este children es todos los componentes porque no especificamos */}
  </UserContext.Provider>
}