import React from "react";
import { Link } from 'react-router-dom';

const PlantCard = ({ plant }) => {
    const {id, name, image} = plant


    return (

        <li className='card'>
            <Link to={`/plants/${id}`}>
                <h4>{name}</h4>
                <img src={image} alt={name} />
            </Link>
        </li>
    )
}

export default PlantCard;