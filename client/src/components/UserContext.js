import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

const UserProvider = (props) => {
    const [plants, setPlants] = useState([]);
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    // useEffect(() => {
    //     //Auto-login
    //     fetch('/me').then((r) => {
    //         if (r.ok) {
    //             r.json().then((user) => {
    //                 setUser(user)
    //                 setLoggedIn(true)
    //             })
    //         }
    //     })
    // }, []); 

    useEffect(() => {
        //Auto-login
        fetch('/me')
        .then(r => r.json())
        .then(data => {
            if (!data.errors){
                setLoggedIn(true)
                setUser(data)
            } else {
                setLoggedIn(false)
            }
        })
    }, []); 

    useEffect(() => {
        fetch('/plants')
        .then(r => r.json())
        .then(data => setPlants(data))
    }, []);

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{
            plants,
            user,
            loggedIn,
            login,
            logout,
            signup
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }