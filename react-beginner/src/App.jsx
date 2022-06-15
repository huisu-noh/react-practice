import React, { useState } from 'react';

import Home from './component/Home';
import Clip from './component/Clip';

function App() {
  const [news, setNews] = useState([]);

  //{"status":"OK",

  console.log('handler up news:', news);

  const fecthNewsHandler = async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=trSbmSW4LczL0n7jtUVEYGEaGjne1QQn`
    );
    const data = await response.json();
    const transformedNews = data.response.docs.map((newsData) => {
      return {
        id: newsData._id,
        title: newsData.abstract,
        date: newsData.pub_date,
      };
    });
    setNews(transformedNews);
    console.log(transformedNews);
    console.log('handler down news:', news);
    console.log('news[0]', news[0]);
  };

  const person = [
    {
      name: 'huisu',
      age: 31,
    },
  ];

  return (
    <>
      <section>
        <button onClick={fecthNewsHandler}>Search</button>
      </section>

      {/* 반복문을 사용해서 props 안에 있는 데이터를 꺼내서 뿌려야한다.  */}
      <Home person={person} />
      <Clip />
    </>
  );
}

export default App;

// map 의 retrun을 아예 <Home news={news[i]} 이런식으로는 안되는건가 ? />
