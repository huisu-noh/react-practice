import React from 'react';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { ClipActions } from '../store/cilpSlice';

const Home = (props) => {
  const dispatch = useDispatch();
  const clipState = useSelector((state) => state.clip.clip);
  const ClipName = useSelector((state) => state.clip.name);
  console.log(`home selector : `, clipState, ClipName);

  const { news } = props;

  const handleClip = () => {
    console.log('hi');
    dispatch(ClipActions.removeClip());
  };

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
              <button onClick={handleClip}>{ClipName}</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Home;
