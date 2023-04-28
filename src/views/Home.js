import Posts from './Posts'
import Categories from "../components/Categories";
import { Container } from '@mui/system';
import NavBar from '../components/NavBar/NavBar';

function Home (){
	return (
		<Container>
			<section>
				<h2> Willkommen zu Andreas Reise- und Eisenbahnblog </h2>
				<Categories />
			</section>
		</Container>
	)
}

export default Home;