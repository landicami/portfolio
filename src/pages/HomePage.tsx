import AboutMe from '../components/AboutMe'
import TopSection from '../components/TopSection';


const HomePage = () => {
  return (
	<>
		<header>
			<TopSection />
		</header>
		<hr/>
		<main>
			<AboutMe/>
		<hr/>

		</main>
		<footer>This is a React JS-application using React-Router, Bootstrap and Vite</footer>
	</>
  )
}

export default HomePage
