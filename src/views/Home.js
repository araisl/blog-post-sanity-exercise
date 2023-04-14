import NavBar from './../components/NavBar';
import Heading from './../components/Heading';
import Footer from './../components/Footer';
import Posts from './../components/Posts'

function Home (){
	return (
		<div className="App">
			<NavBar />
			<Heading />
			<Posts />
			<Footer />
		</div>
	)
}

export default Home;