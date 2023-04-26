import { Link } from "react-router-dom";
import BaseButton from './BaseButton';

// const builder = imageUrlBuilder(sanityClient);

// function urlFor(source) {
// 	return builder.image(source);
// }

const Category = ({category}) => {

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
    <div>
      <br/> <br/>
      <h2> { category.title } </h2>
      <p>{category.description}</p>
      <Link to={"/filteredposts/" + category.slug.current}>
        <BaseButton sx={buttonStyles} variant="contained" color="success">Posts anzeigen</BaseButton>
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
