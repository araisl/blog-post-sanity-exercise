// Routing
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Post from "./views/Post";
import Posts from './views/Posts';
import Authors from './views/Authors';
import FilteredPosts from './views/FilteredPosts';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';

// styles
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
			  <NavBar />

        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/posts' element={< Posts />}></Route>
          <Route exact path='/authors' element={< Authors />}></Route>
          <Route path="/post/:slug" element={<Post />}></Route>
          <Route path="/filteredposts/:slug" element={<FilteredPosts />}></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
