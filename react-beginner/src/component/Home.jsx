import React from 'react';

const Home = (props) => {
  console.log('Home : ', props);

  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>ID: {props.id}</li>
        <li>Title: {props.title}</li>
        <li>Date: {props.date}</li>
        <li>
          <button>Clip</button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
