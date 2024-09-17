import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Container from "react-bootstrap/Container"
import HomePage from './pages/HomePage'

function App() {

  return (
    <Container>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
     
    </Container>
  )
}

export default App
