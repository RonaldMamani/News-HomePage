import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/News';
import NewsCard from './components/Cards';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <News />
      <NewsCard />
    </>
  )
}