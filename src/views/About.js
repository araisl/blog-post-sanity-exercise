import aboutPageImage from "../aboutPageImage.jpg";
import Grid from '@mui/material/Grid'; // Grid version 1
import Container from '@mui/material/Container';

function About () {
	return (
		<Container>
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
		</Container>
	)
}

export default About;
