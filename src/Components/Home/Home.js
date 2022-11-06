import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.scss';

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <img style={{width : "100%" }} src='https://static3.srcdn.com/wordpress/wp-content/uploads/2020/05/The-Avengers-feature-Cropped.jpg'></img>
    </div>
  )
}

export default Home;