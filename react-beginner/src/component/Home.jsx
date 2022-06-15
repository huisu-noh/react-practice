import React from 'react';
import moment from 'moment';

const Home = (props) => {
  console.log('Home : ', props);

  const { news } = props;

  return (
    <div>
      <h1>Home</h1>
      {news.map((contents) => {
        const date = moment(contents.date).format('YYYY-MM-DD HH:mm:ss');
        console.log(contents);
        return (
          <ul key={contents.id}>
            <li>Title: {contents.title}</li>
            <li>Date: {date}</li>
            <li>
              <button>Clip</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Home;
