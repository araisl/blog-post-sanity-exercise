// Imports from React libraries
import { Link } from "react-router-dom";
// Imports for own Components
import BaseButton from "./BaseButton";

// imports from Material UI
import { Paper } from "@mui/material"
import PostPreview from "./postPreview"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Rating from '@mui/material/Rating';
import CategoryIcon from '@mui/icons-material/Category';

import sanityClient from "../cmsClient";
import imageUrlBuilder from "@sanity/image-url";

//import { createTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material';

const authorCardTheme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: 'body2'
					},
					style: {
						fontSize: 15,
					}
				},
			]

		},
		MuiButton: {
			variants: [
				{
					props: {
						variant: 'orange'
					},
					style: {
						fontSize: '0.875rem',
						fontWeight: 600,
						textTransform: 'capitalize',
						backgroundColor: '#F09440',
						borderRadius: 2.5,
						color: 'black',
						'&:hover': {
							backgroundColor: '#F0B36A',
							color: 'black'
						}
					}
				},
				{
					props: {
						variant: 'purple'
					},
					style: {
						fontSize: '0.875rem',
						fontWeight: 600,
						textTransform: 'capitalize',
						backgroundColor: '#7a24dc',
						color: 'white'
					}
				}
			]
		}
	}
});



const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const postTitleStyles = {
	fontWeight: 'bold',
	marginTop: 2
};

const simpleBoxStyles = {
	display: 'flex',
	alignItems: 'center',
	marginTop: 2
};

const AuthorCard = ({author}) => {
  return (
    <Grid item xs={4}>
			<ThemeProvider theme={authorCardTheme}>
				<Paper elevation={3}>


				<Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
					{author.name}
				</Typography>
				<img className="img" src={urlFor(author.avatar).width(200).url()} alt={author.name} />



					
					{/* <Box paddingX={1}>
						<Typography sx={postTitleStyles} variant="h6" component="h2">
							{ post.title }
						</Typography>
						<Box sx={simpleBoxStyles}>
							<PersonIcon sx={{width: 20}} />
							<Typography variant="body2" component="p" marginLeft={0.8}>
								{post.author.name}
							</Typography>
						</Box>
						<Box sx={simpleBoxStyles}>
							<CategoryIcon sx={{width: 20}} />
							{
								post.categories.map((cat) => {
									return (
										<Typography marginLeft={1.2}>
											<Link to={"/filteredposts/" + cat.slug.current}>{ cat.title }</Link>
										</Typography>
									)
								})
							}
						</Box>
						<Box sx={simpleBoxStyles}>
							<Typography>
								Beschreibung: {post.description}
							</Typography>
						</Box>
						<Box sx={simpleBoxStyles}>
							<Rating name="read-only" value={4.5} precision={0.5} readOnly />
							<Typography variant="body2" component="p" marginLeft={0.8}>
								4.5
							</Typography>
							<Typography variant="body2" component="p" marginLeft={0.8}>
								(933 Reviews)
							</Typography>
						</Box>
						<Box sx={simpleBoxStyles}>
							<Link to={"/post/" + post.slug.current} >
								<BaseButton size="large" color="purple" variant="contained">Lesen</BaseButton>
							</Link>
						</Box>
					</Box>  */}

					{/* <PostPreview post={post} key={post._id} /> */}
				</Paper>
			</ThemeProvider>
    </Grid>
  )
}

export default AuthorCard


