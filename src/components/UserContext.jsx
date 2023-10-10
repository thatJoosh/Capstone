import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useAuth = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated())
    const [user, setUser] = useState(null);

    const login = (token, userData) => {
        setIsLoggedIn(true)
        localStorage.setItem("userToken", token)
        localStorage.setItem("isLoggedIn", "true")
        setUser(userData);
    }
    const logout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("userToken")
        localStorage.removeItem("isLoggedIn")
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ isLoggedIn, login, logout, user }}>
            {children}
        </UserContext.Provider>
    )
}

export function isAuthenticated() {
    const token = localStorage.getItem('userToken')
    return token && token.length > 10
}