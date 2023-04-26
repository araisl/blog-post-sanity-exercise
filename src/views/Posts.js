import PostPreview from '../components/postPreview';
import Heading from '../components/Heading';

import React, { useState, useEffect } from "react";
import sanityClient from "../cmsClient";

import Grid from '@mui/material/Grid';
import PostPreviewCard from '../components/PostPreviewCard';

import Container from '@mui/material/Container';

const Posts = () => {
  const [posts, setPosts] = useState([])

  const containerStyles = {
    backgroundColor: '#404080',
    color: 'white'
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
      <br/> <br/>

        <Heading />
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
    </Container>
  );
}

export default Posts
