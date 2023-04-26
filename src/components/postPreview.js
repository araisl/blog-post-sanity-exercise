import { Link } from "react-router-dom";
import sanityClient from "../cmsClient";
import imageUrlBuilder from "@sanity/image-url";
import BaseButton from "./BaseButton";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const PostPreview = ({post}) => {

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

  return (
    <div className='post'>
			<h3>{ post.title }</h3>
			<img src={urlFor(post.mainImage).width(200).url()} alt={post.title} />
			<p> Author: { post.author.name } </p>
			<p> Kategorien: </p>
			<div>
			{
				post.categories.map((cat) => {
					return (
						<Link to={"/filteredposts/" + cat.slug.current}>{ cat.title }</Link>
					)
				})
			}
			</div>
			<p>Beschreibung: { post.description }</p>

			<Link to={"/post/" + post.slug.current}>
				<BaseButton sx={buttonStyles} size="large" color="success" variant="contained">Lesen</BaseButton>
			</Link>
            <br/> <br/>
    </div>
  )
}

export default PostPreview
