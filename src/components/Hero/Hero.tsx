
import './Hero.css';
import { FaPinterest ,FaLinkedin, FaTwitter, FaInstagram,FaYoutube, FaEnvelope } from 'react-icons/fa';

import heroImage from '../../assets/image.webp';
const Hero = () => {
  return (
    <>
    <div className="md:flex m-4">
        <div className="md:w-1/2 lg:max-w-[615px] lg:max-h-[900px] mt-5 scale-on-hover">
        <img src={heroImage} alt="Description" />
      </div>
      <div className="ml-4 mr-4 md:mt-16 text sm:text-left text-center lg:max-w-[670px] lg:max-h-[658] md:w-1/2">
        <h1 className="md:text-5xl text-4xl gradient-h1 poppins-regular g-h1 scale-on-hover">Joshua Kanatt</h1>
        <p className='jost-400 text-xl leading-10 text-neutral-400 md:tracking-[3px] g-h2 fc scale-on-hover'>
        Founder & Chief Executive Officer - GAMERS TAG</p>     
        <p className='jost-300 mt-2 md:tracking-widest hp scale-on-hover'>
        I'm a visionary entrepreneur with over four years of expertise in Product management, architecture, Marketing, Data analytics, Business development & Consulting, and Startups. Designed over 100 world-class products, setting new industry standards. With unique talent for forecasting product growth, validated by extensive customer persona analysis. As an entrepreneur by heart, I bring a competitive mindset to product ownership,
assuring highest performance and innovation with mindset of 5x growth. Have a vision to forecast the product. My expertise of numerous business models in multiple industries, refined by my experience.
        </p>
        
        <br></br>
        <div className='scale-on-hover'>
    <p className='md:text-2xl text-lg jost-400  bg-clip-text md:tracking-[3px] g-q'>"The journey of a thousand miles begins <br></br>with a single innovative step."</p>
    <p className='md:ml-14 md:text-right text-center text-xl jost-400 g-q'>- Joshua Kanatt</p>
    </div>
    <div className="social-media-buttons md:mt-10 md:hidden">
    <a href="https://www.linkedin.com/in/joshuakanatt/" target="google.com" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://x.com/joshua_kanatt/" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://www.instagram.com/joshua_kanatt/" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
<a href="https://in.pinterest.com/joshuakanatt/" target="_blank" rel="noopener noreferrer">
  <FaPinterest />
</a>
    <a href="https://www.youtube.com/@joshuakanatt" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
    <a href="mailto:Joshuakanatt66@gmail.com">
      <FaEnvelope />
    </a>
  </div>
      </div>
      
    </div>
    <div  className="ml-80 -mt-28 poppins-regular hidden lg:block"><hr></hr>
    <div className="flex justify-between mt-2 mr-28 ml-40 acolor">
    <a href="https://www.linkedin.com/in/joshuakanatt/" target="google.com" rel="noopener noreferrer">
  LinkedIn
</a>
<a href="https://x.com/joshua_kanatt/" target="_blank" rel="noopener noreferrer">
  Twitter
</a>
<a href="https://www.instagram.com/joshua_kanatt/" target="_blank" rel="noopener noreferrer">
  Instagram
</a>
<a href="https://in.pinterest.com/joshuakanatt/" target="_blank" rel="noopener noreferrer">
 Pintrest
</a>
<a href="https://www.youtube.com/@joshuakanatt" target="_blank" rel="noopener noreferrer">
  YouTube
</a>
<a href="mailto:Joshuakanatt66@gmail.com">
  Email
</a>
</div>
    </div>
    <div className='lg:mb-20'></div>
  </>
  );
};

export default Hero;