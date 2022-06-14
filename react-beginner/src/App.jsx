import Home from './component/Home';
import Clip from './component/Clip';

function App() {
  const newsList = [
    {
      title: 'Home Work',
      date: '2022-06-13',
    },
    {
      title: 'Hello mama',
      date: '2202-09-02',
    },
  ];

  console.log(newsList);

  return (
    <>
      <Home title={newsList[0].title} date={newsList[0].date} />
      <Home title={newsList[1].title} date={newsList[1].date} />
      <Clip />
    </>
  );
}

export default App;
