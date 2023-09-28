import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("accessToken"));
  //calling itself for get the state.
  //{{user}} : instead of just put {user} we want to sue user value in the feature and throw to context. by using {{user}}
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext };
