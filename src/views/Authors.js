import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../cmsClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);



function urlFor(source) {

	return builder.image(source);

}

const Authors = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "foods"]{
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
		<h1> All Authors </h1>
	)

}

export default Authors;