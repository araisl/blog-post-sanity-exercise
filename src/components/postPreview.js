import { Link } from "react-router-dom";
import sanityClient from "../cmsClient";
import imageUrlBuilder from "@sanity/image-url";
import Button from "@mui/material/Button";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const PostPreview = ({post}) => {

  //const [showText, setShowText] = useState(false);

	console.log(post);
	console.log(post.author.name);

  return (
    <div className='post'>
			<h3>{ post.title }</h3>
			<img src={urlFor(post.mainImage).width(200).url()} alt={post.title} />
			<p> Author: { post.author.name } </p>
			<p> Kategorien: </p>
			<ul>
			{
				post.categories.map((cat) => {
					return (
						<li>
							<Link to={"/filteredposts/" + cat.slug.current}>{ cat.title }</Link>
					  </li>
					)
				})
			}
			</ul>
			<p>Beschreibung: { post.description }</p>

			<Link to={"/post/" + post.slug.current}>
				<Button variant="contained">
					Lesen
				</Button>
			</Link>
            <br/> <br/>
    </div>
  )
}

export default PostPreview
