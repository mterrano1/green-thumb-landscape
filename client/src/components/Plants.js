import React, { useContext } from 'react';
import { MyContext } from './MyContext';
import PlantCard from "./PlantCard";

const Plants = () => {
    const { plants } = useContext(MyContext)

    return (
        <div>
            <ul>
                {plants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}
            </ul>
        </div>
    )
}

export default Plants;