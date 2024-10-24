import AboutMe from "../components/AboutMe";
import LinkButtons from "../components/LinkButtons";
import TopSection from "../components/TopSection";

const HomePage = () => {
	return (
		<>
			<header>
				<TopSection />
			</header>
			<main>
				<AboutMe />
				<LinkButtons />
				<hr />
			</main>
			<footer className="mx-auto d-flex justify-content-center">
				This is a React JS-application using React-Router, Bootstrap and
				Vite
			</footer>
		</>
	);
};

export default HomePage;
