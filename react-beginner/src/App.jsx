import React, { useState } from 'react';

import Home from './component/Home';
import Clip from './component/Clip';

function App() {
  const [news, setNews] = useState([]);

  //{"status":"OK",

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
  };

  // const id = news[0].id;
  // const title = news[0].title;
  // const date = news[0].date;

  return (
    <>
      <section>
        <button onClick={fecthNewsHandler}>Search</button>
      </section>
      <Home news={news} />
      <Clip />
    </>
  );
}

export default App;

// map 의 retrun을 아예 <Home news={news[i]} 이런식으로는 안되는건가 ? />
