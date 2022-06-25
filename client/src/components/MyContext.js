import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

const MyProvider = (props) => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch('/plants')
        .then(r => r.json())
        .then(data => setPlants(data))
    }, [])

    return (
        <MyContext.Provider value={{
            plants: plants
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export { MyProvider, MyContext }