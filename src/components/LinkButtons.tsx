import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkButtons = () => {
    const email = "landin.camilla8@gmail.com";
    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copied");
        })
        .catch(error => {
            console.log("Failed to copy email", error)
        } 
    )};
  return (
<ButtonGroup>
    <Button variant="secondary" onClick={copyEmail}>      
        <FontAwesomeIcon icon={faEnvelope} />
    </Button>
    <Button variant="secondary">
    <a href="https://linkedin.com/in/camilla-landin" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='white-link' icon={faLinkedin} />    </a>
    </Button>
    <Button variant="secondary">
    <a href="https://github.com/landicami" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='white-link' icon={faGithub} />    </a>
    </Button>
    </ButtonGroup>  )
}

export default LinkButtons