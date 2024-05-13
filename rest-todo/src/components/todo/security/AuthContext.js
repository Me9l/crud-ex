import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

  const [isAuthenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState('default')
  function login(username, password) {
    if (username === "user" && password === "1234") {
      setAuthenticated(true)
      setUser(username)
      return true
    } else {
      setAuthenticated(false)
      return false
    }
  }

  function logout() {
    setAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}