import image33 from '../../assets/image 33.png';
import image34 from '../../assets/image 34.png';
import { Fade } from "react-awesome-reveal";
const Paper = () => {
  return (
    <>
    <Fade cascade damping={0.1}>
  <p className="text-4xl gradient text-center poppins-bold mt-64 md:mt-4">Projects & Research Papers</p><br></br>
      <p className='text-center ml-8 mr-8 dm-sans-400 '>These are the list of my research papers & articles published in various socials</p><br></br>
      <div className='poppins-extralight'>
      <div className="md:flex ml-8 mr-8">
      <a href="https://www.linkedin.com/in/joshuakanatt/overlay/1711184089483/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA" target="_blank" rel="noopener noreferrer">
      <div className="text-center m-4 scale-on-hover hover:text-nblack hover:bg-nwhite" >
          <img src={image33} alt="Lead Score Analysis"/>
          <p>Beyond Single Models:
Utilising 14 Diverse Machine Learning
Models to Advance Breast Cancer
Diagnosis
</p>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/joshuakanatt/overlay/1711178976596/single-media-viewer/?type=DOCUMENT&profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA" target="_blank" rel="noopener noreferrer">
        <div className="text-center m-4 scale-on-hover hover:text-nblack hover:bg-nwhite">
          <img src={image34} alt="Breast Cancer Detection"/>
          <p>LEAD SCORE
DATA ANALYSIS:
Find Your Perfect Customer</p>
        </div>
        </a>
      </div>
    </div>
    </Fade>
    </>
  );
};

export default Paper;