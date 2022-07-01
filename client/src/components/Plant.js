import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './UserContext';
import ReviewList from './ReviewList';

const Plant = () => {
    const { id } = useParams();
    const { loggedIn, plants } = useContext(UserContext);

    const filterPlant = plants.filter(plant => plant.id === parseInt(id))

    const displayedPlant = filterPlant.map(plant => (
        <div key={plant.id} >
          <h2>{plant.name}</h2>
          <hr />
          <img src={plant.image} alt={plant.name}/>
          <p>Hardiness Zones: {plant.zone_low} - {plant.zone_high}</p>
          <p>Sun Exposure: {plant.sun_exposure}</p>
          <p>Water Category: {plant.water_category}</p>
          <p>{plant.summary}</p>
          {/* <ul>
            {reviews.map((review) => (
              <ReviewList key={review.id} review={review} />
            ))}
          </ul> */}
        </div>
    ));

    if (loggedIn) {
      return (
        <div>{displayedPlant}</div>
      )
    } else {
        return (
          <h3>Please Login or Signup</h3>
        )
      }
}

export default Plant;