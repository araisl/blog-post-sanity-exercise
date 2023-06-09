import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../cmsClient";
import imageUrlBuilder from "@sanity/image-url";
import BaseButton from '../components/BaseButton';

import Grid from '@mui/material/Grid'; // Grid version 1
import { Container } from "@mui/system";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const FilteredPosts = () => {
  const {slug} = useParams();
	const [filteredPosts, setFilteredPosts] = useState([]);
	const [category, setCategory] = useState({});

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

	useEffect(() => {
		sanityClient.fetch(
			`*[_type == "category" && slug.current == "${slug}"] {
				 title,
				 "posts": *[_type == "post" && references(^._id)] {
					 title,
					 slug,
					 description,
					 mainImage,
				 }
			}`
		)
		.then((data) => {
			setFilteredPosts(data[0].posts);
			setCategory(data[0]);
		})
	}, [])

	console.log('Filtered Posts ist: ', filteredPosts);

  return (
	<Container>
    <Grid item xs={8}>
      <h1> Alle Posts der Kategorie { category.title } </h1>
			{
				filteredPosts.map((post) => {
					return (
						<div key={post._id}>
							<h3>{ post.title }</h3>
							<img src={urlFor(post.mainImage).width(200).url()}/>
							<p> Kurzbeschreibung: { post.description } </p>
							<Link to={"/post/" + post.slug.current}>
								<BaseButton sx={buttonStyles} variant="contained" color="success">
									Lesen
								</BaseButton>
							</Link>
						</div>
					)
				})
			}
    </Grid>
	</Container>
  )
}

export default FilteredPosts

	// useEffect(() => {
	// 	sanityClient.fetch(
	// 		`*[_type == "category" && slug.current == "${slug}"] { _id }`
	// 	)
	// 	.then((data) => {
	// 		return data[0]._id;
	// 	})
	// 	.then((id) => {
	// 		console.log('Die ID ist: ', id);
	// 		sanityClient.fetch(
	// 			` *[_type == "post" && references("${id}")] {
  //         	_id,
  //           title,
  //           description,
  //             mainImage{
  //               asset->{
  //                 _id,
  //                 url
  //               },
  //             },
  //             category->{
  //               title
  //             },
  //       }`
	// 		)
	// 	})
	// 	.then((data) => {
	// 		console.log('data ist am Ende: ', data);
	// 	})
	// 	.catch(err => console.log(err));
	// }, []);



	//const id = "4bf2d97b-8c90-4185-9eb8-10b6577c0d90";

	// useEffect(() => {
	// 	sanityClient.fetch(
	// 		`*[_type == "post" && references("${id}")] {title,}`
	// 	)
	// 	.then((data) => {
	// 		console.log('Mein Ergebnis ist: ', data);
	// 	})
	// })
