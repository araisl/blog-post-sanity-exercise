import { Paper } from "@mui/material"
import PostPreview from "./postPreview"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Rating from '@mui/material/Rating';

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

const PostPreviewCard = ({post}) => {
  return (
    <Grid item xs={4}>
      <Paper elevation={3}>
        <img className="img" src={urlFor(post.mainImage).width(200).url()} alt={post.title} />
				<Box paddingX={1} marginBottom={3}>
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
						<Typography>
							Beschreibung: {post.description}
						</Typography>
					</Box>
					<Box sx={simpleBoxStyles}>
						<Rating name="read-only" value={4.5} precision={0.5} readOnly />
					</Box>

				</Box>

        {/* <PostPreview post={post} key={post._id} /> */}
      </Paper>
    </Grid>
  )
}

export default PostPreviewCard
