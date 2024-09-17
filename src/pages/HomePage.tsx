import React from 'react'
import Button from "react-bootstrap/Button";
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills';

const HomePage = () => {
    const email = "landin.camilla8@gmail.com";
    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copied");
        })
        .catch(error => {
            console.log("Failed to copy email", error)
        } 
    )};

  return (<>
  <div>
    <h1 className='mt-5'>Welcome to my portfolio</h1>
    <h2>Camilla Landin</h2>
    <h3>Front end developer</h3>
    <Button variant="secondary" onClick={copyEmail}>✉️ Email me</Button>
    <hr/>
    </div>
    <AboutMe/>
    <hr/>

    <Skills/>
    </>
  )
}

export default HomePage