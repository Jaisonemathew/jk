
import image32 from '../../assets/image 32.webp';
import image33 from '../../assets/image 33.webp';
import image39 from '../../assets/image 39.webp';
const Paper = () => {
  return (
    <>
  <p className="text-4xl gradient text-center poppins-bold mt-64 md:mt-4">Projects & Research Papers</p><br></br>
      <p className='text-center ml-8 mr-8 dm-sans-400 '>These are the list of my research papers & articles published in various socials</p><br></br>
      <div className='poppins-extralight'>
      <div className="md:flex ml-8 mr-8">
      <div className="text-center m-4 scale-on-hover" >
          <img src={image39} alt="test"/>
          <p>Advanced Neural Image Sensing and noise consilation builder
NavIC (Navigation with Indian Constellation)
</p>
        </div>
        <div className="text-center m-4 scale-on-hover">
          <img src={image33} alt="test"/>
          <p>Advanced Neural Image Sensing and noise consilation builder
NavIC (Navigation with Indian Constellation)
</p>
        </div>
        <div className="text-center m-4 scale-on-hover"> 
          <img src={image32} alt="test"/>
           <p>Advanced Neural Image Sensing and noise consilation builder
          NavIC (Navigation with Indian Constellation)</p> 
        </div>
      </div>
    </div>
    </>
  );
};

export default Paper;