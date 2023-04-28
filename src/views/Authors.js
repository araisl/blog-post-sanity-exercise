import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../cmsClient";
import imageUrlBuilder from "@sanity/image-url";

import Grid from '@mui/material/Grid'; // Grid version 1
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";

import AuthorCard from '../components/AuthorCard';


const builder = imageUrlBuilder(sanityClient);



function urlFor(source) {

	return builder.image(source);

}

const Authors = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
					_id,
      		name,
      		nickname,
					slug,
      		avatar{
        		asset->{
          		_id,
          		url
        		},
      		},
					bio
    		}`
			)
			.then((data) => setAuthors(data))
			.catch(console.error);
	}, []);
	return(
		<Container>
		{/* <Grid item xs={4}> */}

			<Typography>
				<h1> Alle Autoren </h1>
			</Typography>
			<Grid container spacing={5}>
			{
				authors.map((author, index) => {
					return(
						<AuthorCard author={author} key={index}/>
					)
				})
			}
			</Grid>

		</Container>
	)
}

export default Authors;



{/* <Container sx={containerStyles}>
      <Typography>

      <br/> <br/>

        <Heading />
      </Typography>

        <br/> <br/>
        <h1> Alle Posts </h1>
        <br/> <br/>
        <Grid container spacing={5}>
          {
            posts.map((post) => {
              return (
                <PostPreviewCard post={post} />
              )
            })
          }
      </Grid>
    </Container> */}