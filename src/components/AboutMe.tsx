import { Link } from "react-router-dom";

const AboutMe = () => {
	return (
		<>
			<div className="mx-auto d-flex justify-content-center text-align-center">
				<div className="col-lg-6 col-sm-12 col-md-12">
					<p>
						As a prospective developer, I combine technical
						expertise with knowledge in media and pedagogy. My
						experience in journalism has enhanced my ability to
						communicate effectively with diverse audiences. Feel
						free to check out my code{" "}
						<Link to="/projects">project</Link> examples.
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
