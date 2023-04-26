// import { createTheme } from '@mui/material/styles';

// export const railwayBlogTheme = createTheme({
// 	components: {
// 		palette: {
// 			primary: {
// 				main: 'red'
// 			}
// 		},
//     MuiButton: {
// 			styleOverrides:{
// 				backgroundColor: 'aqua!important',
//         // The props to change the default for.
//         //disableRipple: true, // No more ripple, on the whole application 💣!
//       },
//     },
//   },
// });

import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

export const railwayBlogTheme = createTheme({
  palette: {
    primary: blue,
  },
});