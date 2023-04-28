import { useState, useEffect } from "react";
import sanityClient from "../cmsClient";
import Category from "./Category";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Categories = () => {

  const [categories, setCategories] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "category"]{
      title,
      slug,
      description,
    }`
			)
			.then((data) => setCategories(data))
			.catch(console.error);
	}, []);

  return (
    <Container>
      <h2> Alle Kategorien </h2>
		<div>
			{
				categories.map((category) => (
					<Category key={category._id} category={category} />
				))
			}
		</div>
    </Container>
  )
}

export default Categories
