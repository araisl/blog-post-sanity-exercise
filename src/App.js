import './index.css';
// Routing
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Container from '@mui/material/Container';

import NavBar from './components/NavBar/NavBar';
//import Footer from './components/Footer';

// styles
import "./App.css";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
