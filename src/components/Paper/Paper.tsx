
import image32 from '../../assets/image 32.png';
import image33 from '../../assets/image 33.png';
import image39 from '../../assets/image 39.png';
const Paper = () => {
  return (
    <>
  <p className="text-4xl text-newblue text-center">Projects & Research Papers</p><br></br>
      <p className='text-center'>These are the list of my research papers & articles published in various socials</p><br></br>
      <div className="md:flex ml-8 mr-8">
      <div className="text-center m-4">
          <img src={image39} alt="test"/>
          <p>Advanced Neural Image Sensing and noise consilation builder
NavIC (Navigation with Indian Constellation)
</p>
        </div>
        <div className="text-center m-4">
          <img src={image33} alt="test"/>
          <p>Advanced Neural Image Sensing and noise consilation builder
NavIC (Navigation with Indian Constellation)
</p>
        </div>
        <div className="text-center m-4"> 
          <img src={image32} alt="test"/>
           <p>Advanced Neural Image Sensing and noise consilation builder
          NavIC (Navigation with Indian Constellation)</p> 
        </div>
      </div>
    </>
  );
};

export default Paper;