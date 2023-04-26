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

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const postTitleStyles = {
	fontWeight: 'bold'
};

const simpleBoxStyles = {
	display: 'flex',
	alignItems: 'center',
	marginTop: 2
};

const buttonStyles = {
	fontSize: '0.875rem',
	fontWeight: 600,
	backgroundColor: '#F09440',
	textTransform: 'capitalize',
	borderRadius: 2.5,
	'&:hover': {
		backgroundColor: '#F0B36A'
	}
};

const PostPreviewCard = ({post}) => {
  return (
    <Grid item xs={4}>
      <Paper elevation={3}>
        <img className="img" src={urlFor(post.mainImage).width(200).url()} alt={post.title} />
				<Box paddingX={1}>
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
									<Link to={"/filteredposts/" + cat.slug.current}>{ cat.title }</Link>
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
					<Box sx={simpleBoxStyles} >
						<Link to={"/post/" + post.slug.current} >
							<BaseButton sx={buttonStyles} size="large" color="success" variant="contained">Lesen</BaseButton>
						</Link>
					</Box>

				</Box>

        {/* <PostPreview post={post} key={post._id} /> */}
      </Paper>
    </Grid>
  )
}

export default PostPreviewCard
