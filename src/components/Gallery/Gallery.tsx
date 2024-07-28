import React, { useState } from 'react';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";
import image1 from '../../assets/Gallery/1.jpg';
import image2 from '../../assets/Gallery/2.jpg';
import image3 from '../../assets/Gallery/3.jpg';
import image4 from '../../assets/Gallery/4.jpg';
import image5 from '../../assets/Gallery/5.jpg';
import image6 from '../../assets/Gallery/6.jpg';
import image7 from '../../assets/Gallery/7.jpg';
import image8 from '../../assets/Gallery/8.jpg';
import image9 from '../../assets/Gallery/9.jpg';
import image10 from '../../assets/Gallery/10.jpg';
import image11 from '../../assets/Gallery/11.jpg';
const images = [image1, image2, image3, image4,image5,image6,image7,image8,image9,image10,image11];

const imageLinks = [
    'https://www.linkedin.com/posts/joshuakanatt_a-thriving-entrepreneur-is-a-dedicated-activity-7162072490641383424-IAMR?utm_source=share&utm_medium=member_desktop',
    'https://www.linkedin.com/posts/joshuakanatt_im-thrilled-to-announce-that-i-have-activity-7088034104394338304-Y-sG/?utm_source=share&utm_medium=member_desktop',
    'https://www.linkedin.com/posts/joshuakanatt_india-indiansports-historicwins-activity-7108703588369010688-QqGB/?utm_source=share&utm_medium=member_desktop',
    'https://www.linkedin.com/posts/joshuakanatt_entrepreneurship-technology-sports-activity-7045356679705591808-_LFM/?utm_source=share&utm_medium=member_desktop',
    'https://www.linkedin.com/posts/joshuakanatt_entrepreneurship-technology-sports-activity-7045356679705591808-_LFM/?utm_source=share&utm_medium=member_desktop',
    'https://www.linkedin.com/posts/joshuakanatt_entrepreneurship-technology-sports-activity-7045356679705591808-_LFM/?utm_source=share&utm_medium=member_desktop',
    'https://www.linkedin.com/posts/joshuakanatt_entrepreneurship-technology-sports-activity-7045356679705591808-_LFM/?utm_source=share&utm_medium=member_desktop',
    'https://www.linkedin.com/posts/joshuakanatt_entrepreneurship-technology-sports-activity-7045356679705591808-_LFM/?utm_source=share&utm_medium=member_desktop',
    'https://www.linkedin.com/posts/joshuakanatt_startups-business-leadership-activity-7031558151145484289--_kC/?utm_source=share&utm_medium=member_desktop'
  
   ];
  
  const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: auto;
  position: relative; /* Added for positioning buttons */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 700px; /* Set a fixed height for the container */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Hide any overflowing parts of the image */
`;

const ImageLink = styled.a`
  display: block;
  width: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Maintain aspect ratio and fit inside the container */
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const Button = styled.button`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
`;

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
    <Fade cascade damping={0.1}>
   <p className="text-4xl gradient text-center poppins-bold mt-10 ">GALLERY</p><br></br>
    <GalleryContainer>
      <ImageContainer>
        <ImageLink href={imageLinks[currentIndex]} target="_blank" rel="noopener noreferrer">
          <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </ImageLink>
      </ImageContainer>
      <ButtonContainer>
        <Button onClick={handlePrev}>
          &lt;
        </Button>
        <Button onClick={handleNext}>
          &gt;
        </Button>
      </ButtonContainer>
    </GalleryContainer>
    </Fade>
    </>
    
  );
};

export default Gallery;