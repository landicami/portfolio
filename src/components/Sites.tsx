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
				
				<a href="https://github.com/landicami" target="_blank">
				All my code for following projects exists on my github.
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
										A website for my soccer-team in Malmoe. This is right now a
										hobby project.{" "}
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
							<Card.Text
								style={{
									backgroundColor: "white",
								}}
							>
								<small className="framework me-2">
									React.js
								</small>
								<small className="framework">Typescript</small>
							</Card.Text>
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
							<Card.Text
								style={{
									backgroundColor: "white",
								}}
							>
								<small className="framework me-2">Firebase</small>
								<small className="framework">React.js</small>

							</Card.Text>
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
											The Movie Db.
										</a>{" "}
									 Showing popular, trending and genre movies.
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
							<Card.Text
								style={{
									backgroundColor: "white",
								}}
							>
								<small className="framework me-2">React.js</small>
								<small className="framework">
									Tanstack Query
								</small>
							</Card.Text>
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
							<div className="d-flex justify-content-between">
							<div className="col-10">
								<p><strong>SWAPI</strong> is a Star Wars
								encyclopedia. Get info about all the movies, species, vehicles
								and so on!</p>
								</div>
								<div>
									<a
										href="https://landicami-swapi.netlify.app//"
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
								<Card.Text>
									<small className="framework me-2">React.js</small>
									<small className="framework">
										Bootstrap
									</small>
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
						<div className="d-flex justify-content-between">
							<div className="col-10">
									<p><strong>Kill da virus</strong> is a 2-player
									game where the fastest zombie-killer wins! </p>
							</div>
							<div>
							<a
										href="https://github.com/landicami/virus-game-socketio"
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
						<Card.Text>
									<small className="framework me-2">Vanilla.js</small>
									<small className="framework">
										socket.io
									</small>
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
						<div className="d-flex justify-content-between">
							<div className="col-10">
							<p><strong>Bortakväll</strong> is an e-commerce
								page. Put candy in the cart and add the order to
								an API.</p>
								</div>
							<div>
								<a
									href="https://grupp-8-inl-2.netlify.app/"
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
						<Card.Text>
									<small className="framework me-2">Vanilla.js</small>
									<small className="framework">
										Bootstrap
									</small>
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
						<div className="d-flex justify-content-between">
						<div className="col-10">
							<p><strong>Guess the flag</strong>-game! Made initially with students but due to GDPR, play with flags.</p>
								</div>
								<div>
								<a
									href="https://flag-quiz-guess.netlify.app/"
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
							<Card.Text>
									<small className="framework me-2">Vanilla.js</small>
									<small className="framework">
										Bootstrap
									</small>
								</Card.Text>
						</Card.Body>
					</Card>
				</Col>

				{/* <Col lg={3} md={4} sm={12} className="mb-4">
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
				</Col> */}
			</Row>
		</div>
	);
};

export default Sites;
