import LinkButtons from './LinkButtons'
import Image from "react-bootstrap/Image";

const TopSection = () => {
  return (
	<>
	<div className='d-flex'>
		<div className='col-7'>
			<h1 className='mt-4'>Camilla Landin</h1>
			<h2 className='mb-4'>Front end developer</h2>
		</div>
		<div className='col-5'>
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
