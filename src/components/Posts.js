import Post from './Post';
import Heading from './Heading';

import React, { useState, useEffect } from "react";
import sanityClient from "../cmsClient";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showText, setShowText] = useState(false);

  // const toggleText = () => {
  //   console.log('Toggling text');
  // }

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
				`*[_type == "post"]{
      title,
      slug,
      description,
      mainImage{
        asset->{
          _id,
          url
        },
      },
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
      <h3> Alle Posts </h3>
      {/* <button onClick={() => showPosts()}> Show the posts </button> */}
      {/* <Button /> */}
      <br/> <br/>
      <div>
        {
          posts.map((post) => {
            return (<Post
              title={post.title}
              text={post.body}
              //toggleText={toggleText}
              key={post._id} />)
          })
        }
      </div>
      <br/> <br/>
    </div>
  );
}

export default Posts
