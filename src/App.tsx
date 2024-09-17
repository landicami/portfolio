import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Container from "react-bootstrap/Container"
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <Container>
      <Navigation />
    
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
     
    </Container>
  )
}

export default App
