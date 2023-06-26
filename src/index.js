import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './views/Home';
import About from "./views/About";
import Post from "./views/Post";
import Posts from './views/Posts';
import Authors from './views/Authors';
import FilteredPosts from './views/FilteredPosts';
import Categories from "./components/Categories";

import "@kickstartds/base/lib/global/base.js";
import "@kickstartds/base/lib/global/base.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import { railwayBlogTheme } from './railwayBlogTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={railwayBlogTheme}>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< App />}>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/posts' element={<Posts />}></Route>
          <Route exact path='/authors' element={<Authors />}></Route>
          <Route exact path='/categories' element={<Categories />}></Route>
          <Route path="/post/:slug" element={<Post />}></Route>
          <Route path="/filteredposts/:slug" element={<FilteredPosts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
