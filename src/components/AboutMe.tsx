import Image from "react-bootstrap/Image"

const AboutMe = () => {
  return (
    <>
        <div className='d-flex justify-content-between'>
        <div className='col-7'>
        <p>
        As a prospective Front End Developer, I combine technical expertise with knowledge in media and pedagogy.
        My experience in journalism has enhanced my ability to communicate effectively with diverse audiences.
        Feel free to check out my code project examples below.</p>
        </div>
        <div className='col-4'>
            <Image id="profile-pic" rounded fluid src="/MyPhoto.PNG" alt="A photo of Camilla Landin" />
        </div>
        </div>
    </>
  )
}

export default AboutMe
