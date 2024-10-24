import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const LinkButtons = () => {
	const email = "landin.camilla8@gmail.com";
	const copyEmail = () => {
		navigator.clipboard
			.writeText(email)
			.then(() => {
				alert("Email copied");
			})
			.catch((error) => {
				console.log("Failed to copy email", error);
			});
	};
	return (
		<div className="d-flex justify-content-center">
			<ButtonGroup>
				<Button
					variant="secondary"
					onClick={copyEmail}
					aria-label="Kopiera email-adress/Copy email"
				>
					<FontAwesomeIcon icon={faEnvelope} />
				</Button>
				<Button
					variant="secondary"
					aria-label="Öppna LinkedIn-profil/Open LinkedIn profile"
					onClick={() =>
						window.open(
							"https://linkedin.com/in/camilla-landin",
							"_blank"
						)
					}
				>
					<FontAwesomeIcon className="white-link" icon={faLinkedin} />
				</Button>
				<Button
					variant="secondary"
					aria-label="Öppna Github-profil/Open GitHub profile"
					onClick={() =>
						window.open("https://github.com/landicami", "_blank")
					}
				>
					<FontAwesomeIcon className="white-link" icon={faGithub} />
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default LinkButtons;
