// own Components
//import PostPreview from '../components/postPreview';
import Heading from '../components/Heading';
import PostPreviewCard from '../components/PostPreviewCard';
import SearchAppBar from '../components/AppBar';

// React Hooks
import React, { useState, useEffect } from "react";

//Sanity
import sanityClient from "../cmsClient";

// Material UI Components
import {Grid, Container, Typography} from '@mui/material';


const Posts = () => {
  const [posts, setPosts] = useState([])

  const containerStyles = {
    backgroundColor: '#404080',
    color: 'white',
    marginY: 5
  }

  useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"] {
      _id,
      title,
      slug,
      description,
      author->{
        name
      },
      mainImage{
        asset->{
          _id,
          url
        },
      },
      categories[]->,
      body,
        }`
			)
			.then((data) => setPosts(data))
			.catch(console.error);
	}, []);

  return(
    <Container sx={containerStyles}>
        <Heading text="Andreas Eisenbahnblog"/>
        <Typography variant="h2" component="h2" marginBottom={2}>
          Alle Posts
        </Typography>

        <Grid container spacing={5}>
          {
            posts.map((post, index) => {
              return (
                <PostPreviewCard post={post} key={index} />
              )
            })
          }
      </Grid>
    </Container>
  );
}

export default Posts
