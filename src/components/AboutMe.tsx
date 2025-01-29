import { Link } from "react-router-dom";

const AboutMe = () => {
	return (
		<>
			<div className="mx-auto d-flex justify-content-center text-align-center">
				<div className="col-lg-6 col-sm-12 col-md-12">
					<p>
					I am right now completing my third degree in life — this time in web development, specializing in front-end and UX. My passion lies in creating user-friendly and accessible digital experiences that enable everyone to participate, regardless of their abilities or circumstances.
					<br/>
					<br/>
					My background spans journalism and working with people in need of special support, from being a student assistant to creating inclusive media projects such as podcasts featuring Melodifestivalen stars and Carolina Klüft. These experiences have shaped my commitment to accessibility and user-centered design.
					<br/>
					<br/>
					Now, as I transition into tech, I bring the same dedication to inclusion and storytelling into my work as a front-end developer. I’m eager to collaborate on projects that prioritize usability, accessibility, and great digital experiences.
					<br/>
					<br/>
					If you're curious about working together, feel free to send me an email. {" "}
					<br/>
					<Link to="/projects">You will find my code projects here.</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
