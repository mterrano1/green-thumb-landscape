import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

const UserProvider = (props) => {
    const [plants, setPlants] = useState([]);
    const [user, setUser] = useState({});
    const [userPlants, setUserPlants] = useState([]);
    const [userReviews, setUserReviews] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        //Auto-login
        fetch('/me')
        .then(r => r.json())
        .then(data => {
            if (!data.errors){
                setLoggedIn(true)
                setUser(data)
                setUserPlants(data.plants)
                setUserReviews(data.reviews)
            } else {
                setLoggedIn(false)
            }
        })
    }, []);

    useEffect(() => {
        fetch('/plants')
        .then(r => r.json())
        .then(data => setPlants(data))
    }, [reviews]);

    const addReview = (review) => {
        setReviews([...reviews, review])
    }

    const addUserPlant = (plant) => {
        setUserPlants([...userPlants, plant])
    }

    const login = (user) => {
        setUser(user)
        setUserPlants(user.plants)
        setUserReviews(user.reviews)
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

    const handleDeleteReview = (deletedReview) => {
        const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id);
        setReviews(updatedReviews)
    }

    const removeUserPlant = (deletedPlantId) => {
        const updatedUserPlants = userPlants.filter((userPlant) => userPlant.id !== deletedPlantId)
        setUserPlants(updatedUserPlants)
    }

    return (
        <UserContext.Provider value={{
            plants,
            user,
            loggedIn,
            userPlants,
            userReviews,
            login,
            logout,
            signup,
            addReview,
            addUserPlant,
            handleDeleteReview,
            removeUserPlant
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }