import AboutMe from '../components/AboutMe'
import Sites from '../components/Sites';
import TopSection from '../components/TopSection';


const HomePage = () => {
  return (
	<>
		<main>
		<TopSection />
		<hr/>

		<AboutMe/>
		<hr/>

		<Sites />
		</main>
	</>
  )
}

export default HomePage
