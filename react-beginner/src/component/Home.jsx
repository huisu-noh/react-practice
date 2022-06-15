import React from 'react';

import Age from './Age';

const Home = (props) => {
  console.log(props.person[0].age);
  const age = props.person[0].age;

  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>name: {props.person[0].name}</li>
        <Age age={age} />
        <li>ID: {}</li>
        <li>Title: {}</li>
        <li>Date: {}</li>
        <li>
          <button>Clip</button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
