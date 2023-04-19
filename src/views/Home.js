import Posts from './Posts'
import Categories from "../components/Categories";

function Home (){
	return (
		<section>
			<h2> Willkommen zu Andreas Reise- und Eisenbahnblog </h2>
			<Categories />
		</section>
	)
}

export default Home;