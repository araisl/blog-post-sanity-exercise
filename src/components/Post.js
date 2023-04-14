import React from 'react'
import {useState} from 'react';

const showPost = () => {
	console.log('Showing one post');
}

const Post = ({title, text, toggleText}) => {
	
  const [showText, setShowText] = useState(false);

  return (
    <div>
			{/* <li> { showText ? text : title } </li> */}
			<li> {title} </li>
			<button onClick={() => {
				console.log('Showing 1 post in detail');
				toggleText();
			}}> Read this post </button>
    </div>
  )
}

export default Post
