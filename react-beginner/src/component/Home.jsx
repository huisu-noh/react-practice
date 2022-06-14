import React from 'react';

import { useState } from 'react';

const Home = (props) => {
  const [isClip, setIsClip] = useState(true);

  const clipHandeler = () => {
    setIsClip(!isClip);
  };

  return (
    <div>
      <ul>
        <li>{props.title}</li>
        <li>{props.date}</li>
        <li>
          <button onClick={clipHandeler}>
            {isClip == true ? 'Clip' : 'UnClip'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
