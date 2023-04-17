import NavBar from './components/NavBar';

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
		  </div>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/posts' element={< postsView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
