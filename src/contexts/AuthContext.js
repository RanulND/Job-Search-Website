import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext({
    currentUser: null,
    company: null,
    handleUser: (user) => {},
    setCompany: () => {},
    logout: () => {},
    setCurrentUser: () => {}
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [company, setCompany] = useState(null)

    const handleUser = (user) => {
        setCurrentUser(user)
        setCompany()
    }

    const logout = () => {
        setCurrentUser(null)
    }

    useEffect(() => {
        // handleUser()
    }, [])

    return(
        <AuthContext.Provider value={{
            currentUser,
            handleUser,
            logout
        }}>
            {children}
        </AuthContext.Provider>

    )
}

export const AuthConsumer = AuthContext.Consumer

export default AuthProvider