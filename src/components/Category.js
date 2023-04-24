import { Link } from "react-router-dom";
import sanityClient from "../cmsClient";
import imageUrlBuilder from "@sanity/image-url";

import Button from '@mui/material/Button';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const Category = ({category}) => {
  return (
    <div>
      <br/> <br/>
      <h2> { category.title } </h2>
      <p>{category.description}</p>
      <Link to={"/filteredposts/" + category.slug.current}>
        <Button variant="contained">
            Posts anzeigen
        </Button>
      </Link>

      <br/> <br/>
    </div>
  )
}

export default Category


















		

		
			

			

			

// 			<Link to={"/filteredfoods/" + category.slug.current}>

// 				<button

// 					style={{ backgroundColor: "#FE043C" }}

// 					className="rounded mt-3 px-5 py-2 text-white"

// 				>

// 					View

// 				</button>

// 			</Link>

// 		</div>

// 	);

// };



// export default Category;
