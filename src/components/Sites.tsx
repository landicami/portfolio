import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Sites = () => {
	return (
		<div>
			<h1 className="mt-5">Projects</h1>
			<h5>Latest first</h5>
			<p>
				All my code for following projects exists on{" "}
				<a href="https://github.com/landicami" target="_blank">
					my github.
				</a>{" "}
				Most of these projects are written in Typescript, Vanilla-JS and
				basic html.
			</p>

			<Row className="mt-5">
				<Col lg={3} md={4} sm={12} className="mb-4">
					<Card className="h-100 card-project">
						<Card.Img
							className="custom-card-img"
							variant="top"
							src="/laspres.PNG"
							alt="En sida för mitt fotbollsslag."
						/>
						<Card.Body>
							<div className="d-flex justify-content-between">
								<div className="col-10">
									<p>
										{" "}
										A website for my soccer-team. This is a
										hobbyproject.{" "}
										<strong>Las Presidentas 4-ever!</strong>
									</p>
								</div>
								<div>
									{" "}
									<a
										href="https://laspresidentasbk.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Öppna sidan i ett nytt fönster"
									>
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="icon"
										/>
									</a>
								</div>
							</div>
							<Card.Footer
								style={{
									backgroundColor: "white",
								}}
							>
								<small className="framework me-2">
									React.js
								</small>
								<small className="framework">Typescript</small>
							</Card.Footer>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} md={4} sm={12} className="mb-4">
					<Card className="h-100 card-project">
						<Card.Img
							className="custom-card-img"
							variant="top"
							src="/sulten.PNG"
							alt="En restaurangsida med GoogleMaps."
						/>
						<Card.Body>
							<div className="d-flex justify-content-between">
								<div className="col-10">
									<p>
										<strong>Sulten</strong> is a
										hangry-map-page using Google Maps API
										and Firebase to store restaurants near
										you.
									</p>
								</div>
								<div>
									<a
										href="https://ruhangry.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Öppna sidan i nytt fönster"
									>
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="icon"
										/>
									</a>
								</div>
							</div>
							<Card.Footer
								style={{
									backgroundColor: "white",
								}}
							>
								<small className="framework">Firebase</small>
							</Card.Footer>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3} md={4} sm={12} className="mb-4">
					<Card className="h-100 card-project">
						<Card.Img
							className="custom-card-img"
							variant="top"
							src="/CaMovie.PNG"
							alt="En film-sida med information om populära filmer."
						/>
						<Card.Body>
							<div className="d-flex justify-content-between">
								<div className="col-10">
									<p>
										<strong>C A Movie</strong> is a
										movie-database using API from{" "}
										<a href="https://developer.themoviedb.org/">
											The Movie Db
										</a>{" "}
										with bearer key.
									</p>
								</div>
								<div>
									<a
										href="https://landicami-findzecode.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Öppna sidan i ett nytt fönster"
									>
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="icon"
										/>
									</a>
								</div>
							</div>
							<Card.Footer
								style={{
									backgroundColor: "white",
								}}
							>
								<small className="framework">
									Tanstack Query
								</small>
							</Card.Footer>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3} md={4} sm={12} className="mb-4 ">
					<Card className="h-100 card-project">
						<Card.Img
							className="custom-card-img"
							variant="top"
							src="/SWAPI.PNG"
							alt="En STAR WARS-encyklopedi"
						/>
						<Card.Body>
							<Card.Text>
								<strong>SWAPI</strong> is a Star Wars
								encyclopedia. Get info about movies, species,
								and so on!
								<br />
								<a
									href="https://landicami-swapi.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									Go to site
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3} md={4} sm={12} className="mb-4 ">
					<Card className="h-100 card-project">
						<Card.Img
							className="custom-card-img"
							variant="top"
							src="/killvirus.PNG"
							alt="Ett spel där man dödar zombies"
						/>
						<Card.Body>
							<Card.Text>
								<strong>Kill da virus</strong> is a 2-player
								game where the fastest zombie-killer wins!
								<br />
								<a
									href="https://github.com/landicami/virus-game-socketio"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									Go to code
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3} md={4} sm={12} className="mb-4">
					<Card className="h-100 card-project">
						<Card.Img
							className="custom-card-img"
							variant="top"
							src="/bortakväll.PNG"
							alt="En e-handelssida"
						/>
						<Card.Body>
							<Card.Text>
								<strong>Bortakväll</strong> is an e-commerce
								page. Put candy in the cart and add the order to
								an API.
								<br />
								<a
									href="https://grupp-8-inl-2.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									Go to site
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3} md={4} sm={12} className="mb-4">
					<Card className="h-100 card-project">
						<Card.Img
							className="custom-card-img"
							variant="top"
							src="/game.PNG"
							alt="En hemsida för ett quiz"
						/>
						<Card.Body>
							<Card.Text>
								<strong>Guess the flag</strong>-game!
								<br />
								<a
									href="https://flag-quiz-guess.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									Go to site
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3} md={4} sm={12} className="mb-4">
					<Card className="h-100 card-project">
						<Card.Img
							className="custom-card-img"
							variant="top"
							src="/socks.PNG"
							alt="En hemsida för strumpor"
						/>
						<Card.Body>
							<Card.Text>
								<strong>Hit me up with socks</strong> was the
								first html-site for me. Looks cute.
								<br />
								<a
									href="https://need-socks-now.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									Go to site
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Sites;
