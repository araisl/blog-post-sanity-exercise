import * as React from "react";

import { useState, useEffect } from "react";
import sanityClient from "../cmsClient";
import imageUrlBuilder from "@sanity/image-url";
import Category from "./Category";
//import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import PostPreviewCard from '../components/PostPreviewCard';

import { Button } from "@kickstartds/base/lib/button";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const Categories = () => {

  const [categories, setCategories] = useState([]);

	const [posts, setPosts] = useState([]);

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

	const markupText = React.createElement("p", null, "In unseren Coding Bootcamps erlangen die Teilnehmer:innen in einem sehr kurzen und intensiven Zeitraum von nur 4 Monaten das nötige Wissen, um als Web oder App Developer zu arbeiten.");
	
	const storytellingProps = {
		box: {
			headline: {
				content: "Was ist nochmal ein Bootcamp?",
				level: "h2",
				styleAs: "h2",
				subheadline: "Bootcamp steht umgangssprachlich für den Prozess bzw. den Ort einer intensiven Grundausbildung."
			},
			textAlign: "center",
      text: "Das hier ist der Text der Story",
		},
		image: {
			source: "https://cdn0.scrvt.com/63dd5a2bcb8ceea74ad330514ba772d8/beac87a3476ebc29/e11f32064396/v/73e48c0585fc/Personen-lachen.png?nowebp=1",
		},
		renderText: (t) => markupText,
	};
	
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

			<h2> Here comes a Kickstart Button </h2>

			<Button
				href="https://taktsoft.com"
				label="Hier klicken!"
				size="medium"
				type="button"
				variant="solid"
			/>

			<h2> Here comes a Kickstart Storytelling Element </h2>

			<Storytelling {...storytellingProps} />


    </Container>
  )
}

export default Categories
