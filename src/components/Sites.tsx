
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
const Sites = () => {
  return (
	<div>
		<h1 className="mb-3">Projects</h1>
		<Row>
      {/* First card */}
      <Col lg={3} md={4} sm={12} className="mb-4 ">
        <Card className="h-100 bg-dark text-white border">
          <Card.Img className="custom-card-img" variant="top" src="/SWAPI.PNG" alt="Bild på hemsida" />
          <Card.Body>
            <Card.Text>
              SWAPI is a Star Wars encyclopedia. Get info about movies, species, and so on!
              <br />
			  <a href="https://landicami-swapi.netlify.app/" target="_blank" rel="noopener noreferrer"> Go to site</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Second card */}
      <Col lg={3} md={4} sm={12} className="mb-4">
        <Card className="h-100 bg-dark text-white border">
          <Card.Img className="custom-card-img" variant="top" src="/CaMovie.PNG" alt="Bild på hemsida" />
          <Card.Body>
            <Card.Text>
              C A Movie is a movie-database using API from
              <a href="https://developer.themoviedb.org/"> The Movie Db</a> with a bearer key.
			  <br/>
              <a href="https://landicami-findzecode.netlify.app/" target="_blank" rel="noopener noreferrer"> Go to site</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Placeholder card */}
      <Col lg={3} md={4} sm={12} className="mb-4">
        <Card className="h-100 bg-dark text-white border">
          <Card.Body>
            <Card.Text>Image</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
		</div>


  )
}

export default Sites
