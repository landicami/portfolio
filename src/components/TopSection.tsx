import LinkButtons from './LinkButtons'
import Image from "react-bootstrap/Image";

const TopSection = () => {
  return (
	<>
	<div className='d-flex'>
		<div className='col-8'>
			<h1 className='mt-4'>Camilla Landin</h1>
			<h2 className='mb-4'>Full Stack Developer with a focus on digital accessibility
			</h2>
		</div>
		<div className='col-4'>
            <div>
				<Image className="mt-4" id="profile-pic" rounded src="/MyPhoto.PNG" alt="A photo of Camilla Landin" />
			</div>
        </div>
	</div>
	   	<LinkButtons />
	</>
  )
}

export default TopSection
