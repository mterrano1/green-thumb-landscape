import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import PlantCard from "./PlantCard";

const Plants = () => {
    const { plants } = useContext(UserContext)

    return (
        <div>
            <hr/>
            <h1>Plants</h1>
            <hr/>
            <ul className='cards'>
                {plants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}
            </ul>
        </div>
    )
}

export default Plants;