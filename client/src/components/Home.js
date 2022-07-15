import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const {user, loggedIn} = useContext(UserContext);

    const welcome = loggedIn ? <h1 className='capitalize'>{user.username}</h1> : <h2>Welcome to Green Thumb Landscape! The best place to get help designing your next landscape project!</h2>

    return (
        <div>
            <hr/>
            {welcome}
            <hr/>
            <h3>Before you begin, please take the time to familiarize yourself some landscaping terminology:</h3>
                <p>The <a href='https://planthardiness.ars.usda.gov/' target='blank'>USDA Plant Hardiness Zone Map</a> is the standard by which gardeners and growers can determine which plants are most likely to thrive at a location</p>
                <p>Sun Exposures:</p>
                <ul>
                    <li>Full sun means the plant requires at least 6 hours of direct sunlight a day</li>
                    <li>Part sun means the plant requires between 3-6 hours of direct sunlight a day</li>
                    <li>Full shade means the plant requires less than 4 hours of direct sunlight a day</li>
                </ul>
                <p>Water Categories:</p>
                <ul>
                    <li>Wet will need watering 3-4 times per week</li>
                    <li>Average will need watering 2 times per week</li>
                    <li>Low will only need watering 1 time per week</li>
                </ul>
            <Link to={`/plants`}>
                <button>Start designing</button>
            </Link>
        </div>
    );
}

export default Home;