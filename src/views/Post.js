import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../cmsClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const Post = () => {



	const [posts, setPosts] = useState([]);

	const { slug } = useParams();

	useEffect(() => {
		console.log('Slug ist: ', slug);
		sanityClient
			.fetch(
				`*[_type == "post" && slug.current == "${slug}"]{
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
			body,
		}`
		)
		.then((data) => setPosts(data))
		.catch(console.error);
	}, []);



  return (
		<div>
		{
			posts.map((post) => {
				console.log('Der Text ist: ', post.body[0].children[0].text);
				return (
					<>
					<h2> {post.title} </h2>

					<p> {post.body[0].children[0].text} </p>

					<img src={urlFor(post.mainImage).width(800).url()}/>
					</>
				)
			})
		}
		</div>
  )
}

export default Post




// import { Link } from "react-router-dom";
// import sanityClient from "../cmsClient";
// import imageUrlBuilder from "@sanity/image-url";



// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
// 	return builder.image(source);
// }

// const Post = ({post}) => {

//   //const [showText, setShowText] = useState(false);

//   return (
//     <div className='post'>
// 			<img src={urlFor(post.mainImage).url()} alt={post.title} height='300px' width='400px'/>
// 			<h3>{ post.title }</h3>
// 			<p>{ post.description }</p>

// 			<Link to={"/post/" + post.slug.current}>
// 				<button	style={{ backgroundColor: "#FE043C" }}>
// 					Lesen
// 				</button>
// 			</Link>

// 			{/* <button onClick={() => {
// 				console.log('Showing 1 post in detail');
// 				toggleText();
// 			}}> Read this post </button> */}
// 			<br/> <br/>
//     </div>

//   )
// }

// export default Post
