import './App.css';
import Posts from './components/Posts'
import NavBar from './components/NavBar';
import Heading from './components/Heading';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Heading />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
