import Image from "react-bootstrap/Image";

const Sites = () => {
  return (
	<div>
		<h1 className="mb-3">Projects</h1>
		<div className='row'>
			<div className='col-lg-3 col-md-3 col-sm-12'>
				<Image className="rounded" fluid src="/SWAPI.PNG" alt="Bild på hemsida"/>
				<p>SWAPI is a Star Wars encyklopedia. Get info about movies, species and so on! <a href="https://landicami-swapi.netlify.app/" target="_blank">Go to site</a></p>
			</div>
			<div className='col-lg-3 col-md-3 col-sm-12'>
				<Image className="rounded" fluid src="/CaMovie.PNG" alt="Bild på hemsida"/>
				<p>C A Movie is a movie-database using api from <a href="https://developer.themoviedb.org/">The movie Db</a> with bearer key. <a href="https://landicami-findzecode.netlify.app/" target="_blank">Go to site</a></p>
			</div>
			<div className='col-lg-3 col-sm-12'>
				<p>Image</p>
			</div>

		</div>
		</div>


  )
}

export default Sites
