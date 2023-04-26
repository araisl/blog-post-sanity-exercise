import aboutPageImage from "../aboutPageImage.jpg";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

function About () {
	return (
		<Grid item xs={8}>
			<h1>This is a blog about railways</h1>
			<img src={ aboutPageImage } width="800px" />

			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
				accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
				sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
				elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
				sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
				kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
				sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
				et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
				dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
			  dolor sit amet.
			</p>

			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
				accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
				sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
			  elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
			  sed diam voluptua. At vero eos et accusam et.
			</p>

			Read more about Taktsoft at :
			<a href="https://taktsoft.com/">
					Taktsoft
			</a>
		</Grid>
	)
}

export default About;
