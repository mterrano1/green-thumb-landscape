import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

const MyLandscape = () => {
    const {user, loggedIn, userPlants} = useContext(UserContext);

    const landscapePlants = userPlants.map(plant => (
        <li key={plant.id} className='card'>
            <Link to={`/plants/${plant.id}`}>
                <h3>{plant.name}</h3>
                <img src={plant.image} alt={plant.name}/>
                <h4></h4>
            </Link>
        </li>
    ))

    if (loggedIn) {
        return (
            <div>
                <hr/>
                <h1 className='capitalize'>{user.username}'s Landscape</h1>
                <hr/>
                <ul className='cards'>
                    {landscapePlants}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <h3>Please Login or Signup</h3>
            </div>
        )
    }
}

export default MyLandscape;