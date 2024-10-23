
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
const Sites = () => {
  return (
	<div>
		<h2 className="mb-3">Projects</h2>
		<Row>
      {/* First card */}
      <Col lg={3} md={4} sm={12} className="mb-4 ">
        <Card className="h-100 bg-dark text-white border">
          <Card.Img className="custom-card-img" variant="top" src="/SWAPI.PNG" alt="Bild på hemsida som är en encyklopedi" />
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
          <Card.Img className="custom-card-img" variant="top" src="/CaMovie.PNG" alt="Bild på hemsida som är en film-sida" />
          <Card.Body>
            <Card.Text>
              C A Movie is a movie-database using API from
              <a href="https://developer.themoviedb.org/"> The Movie Db</a> with bearer key.
			  <br/>
              <a href="https://landicami-findzecode.netlify.app/" target="_blank" rel="noopener noreferrer"> Go to site</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Placeholder card */}
      <Col lg={3} md={4} sm={12} className="mb-4">
        <Card className="h-100 bg-dark text-white border">
		<Card.Img className="custom-card-img" variant="top" src="/sulten.PNG" alt="Bild på hemsida som är en restaurangsida" />
        	<Card.Body>
			<Card.Text>
              Sulten is a hangry-map-page using Google Maps API and Firebase to store restaurants near you
			  <br/>
              <a href="https://ruhangry.netlify.app/" target="_blank" rel="noopener noreferrer"> Go to site</a>
            </Card.Text>
			</Card.Body>
        </Card>
      </Col>

	  <Col lg={3} md={4} sm={12} className="mb-4">
        <Card className="h-100 bg-dark text-white border">
		<Card.Img className="custom-card-img" variant="top" src="/bortakväll.PNG" alt="Bild på hemsida som är en e-handelssida" />
        	<Card.Body>
			<Card.Text>
              Bortakväll is an e-commerce page. Put candy in the cart and add the order to an API.
			  <br/>
              <a href="https://grupp-8-inl-2.netlify.app/" target="_blank" rel="noopener noreferrer"> Go to site</a>
            </Card.Text>
			</Card.Body>
        </Card>
      </Col>
    </Row>
		</div>


  )
}

export default Sites
