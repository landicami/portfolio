import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Container from "react-bootstrap/Container"
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import NotFoundPage from './pages/NotFoundPage'
import SkillsPage from './pages/SkillsPage'
import Sites from './components/Sites'
import CV from './pages/CV'

function App() {

  return (
	<>
      <Navigation />
	  <Container>

      <Routes>
        <Route path="/" element={<HomePage/>} />
		<Route path="/projects" element={<Sites/>} />
		<Route path="/cv" element={<CV />} />


		<Route path="/skills" element={<SkillsPage/>} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>

    </Container>
	</>
  )
}

export default App
