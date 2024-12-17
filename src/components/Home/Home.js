import React from 'react';
import './Home.css';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text]= useTypewriter({
    words: ['DEVELOPER', 'DESIGNER', 'TEAM PLAYER'],
    loop: true,
    typeSpeed: 150,  // Speed of typing
    deleteSpeed: 100, // Speed of deleting text
    delaySpeed: 1000, // Delay between words
  });

  return (
    <div className="container">
      <div className="collector">
        <div className="desc">
          H! I'M VYSAKH <br />
          I'M A CREATIVE <br />
          <span className="variable">
            {text} {/* Ensure this renders */}
            <Cursor />
          </span>
        </div>
        <div className="pic"></div>
      </div>
    </div>
  );
};

export default Home;
