import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from './MyContext';

const Plant = () => {
    const { id } = useParams();
    const { plants } = useContext(MyContext)

    const findPlant = plants.find(plant => plant.id == id)

    if (!findPlant) return <h2>Loading...</h2>

    const userZone = 8

    const zone = () => {
        if (userZone >= findPlant.zone_low && userZone <= findPlant.zone_high)
        console.log('yes')
    }

    zone()



  return (
    <div>
        <h2>{findPlant.name}</h2>
        <hr />
        <img src={findPlant.image} alt={findPlant.name}/>
        <p>Sun exposure: {findPlant.sun_exposure}</p>
        <p>Water category: {findPlant.water_category}</p>
        <p>{findPlant.summary}</p>
    </div>
  );
}

export default Plant;