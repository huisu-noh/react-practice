import React from 'react';

const Age = (props) => {
  console.log(props.age);
  return (
    <div>
      <li>{props.age}</li>
    </div>
  );
};

export default Age;
