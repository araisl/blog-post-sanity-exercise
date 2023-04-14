// Components
import Posts from './components/Posts'
import NavBar from './components/NavBar';
import Heading from './components/Heading';
import Footer from './components/Footer';

// Routing
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import postsView from "./views/Posts";

// styles
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Heading />
        <Posts />
        <Footer />
      </div>    
    </BrowserRouter>
  );
}

export default App;
