import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='container'>
            <h1>Welcome to <span class="name-style">FitGoals</span></h1>
      <p>Start your fitness journey today!</p>
      {/* eslint-disable-next-line */}
      <Link to="/signup" className="button">Get Started</Link>
    </div>
  );
}

export default Home;
