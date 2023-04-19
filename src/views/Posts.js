import PostPreview from '../components/postPreview';
import Heading from '../components/Heading';

import React, { useState, useEffect } from "react";
import sanityClient from "../cmsClient";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // const showPosts = () => {
  //   fetch(URL)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then(({ result }) => {
  //     setPosts(result);
  //     })
  //     .catch((err) => console.error(err));
  // }

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
    <div className='postsContainer'>
      <Heading />
      <br/> <br/>
      <h1> Alle Posts </h1>
      <br/> <br/>
      <div>
        {
          posts.map((post) => {
            return (<PostPreview
            post={post}
            key={post._id} />)
          })
        }
      </div>
      <br/> <br/>
    </div>
  );
}

export default Posts
