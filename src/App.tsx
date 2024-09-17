import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Container from "react-bootstrap/Container"
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import NotFoundPage from './pages/NotFoundPage'
import SkillsPage from './pages/SkillsPage'

function App() {

  return (
    <Container>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage/>} />
		<Route path="/skills" element={<SkillsPage/>} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>

    </Container>
  )
}

export default App
