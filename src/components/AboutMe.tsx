import { Link } from "react-router-dom"

const AboutMe = () => {
  return (
    <>
        <div className='d-flex justify-content-between'>
        <div className='col-8'>
        <p>
        As a prospective developer, I combine technical expertise with knowledge in media and pedagogy.
        My experience in journalism has enhanced my ability to communicate effectively with diverse audiences.
        Feel free to check out my code <Link to="/projects">project</Link> examples.</p>
        </div>

        </div>
    </>
  )
}

export default AboutMe
