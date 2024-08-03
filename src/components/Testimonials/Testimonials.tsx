import React from 'react';
import styles from './Testimonials.module.css';
import utpul_tiwari from '../../assets/Utpul_Tiwari.jpeg'
import sundaram from '../../assets/Sundaram.jpeg'
import Jayant_patara from '../../assets/jayant_patara.jpeg'
import john from '../../assets/John.jpeg'
import dibin from '../../assets/Dibin.jpeg'
import kevin from "../../assets/Kevin.jpeg"
import arjun_gopi from '../../assets/Arjun_gopi.jpeg'
import Johnson from "../../assets/Johnson.jpeg"
import shivansh from "../../assets/Shivansh.jpeg"
import aditya from "../../assets/Aditya.jpeg"
import nitin from "../../assets/Nitin.jpeg"
import Numa from "../../assets/Numa.jpeg"
import Ahmd from "../../assets/Ahmd.jpeg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";


const testimonialsData = [
  {
    name: 'Utpul Tiwari',
    position: 'GDSC IIIT SONEPAT',
    description: 'It has been an absolute privilege to work under the guidance of Joshua Kanatt, CEO of GamersTag Pvt Ltd. Joshua Sir has consistently been a beacon of inspiration throughout my tenure as a Flutter developer, fostering an environment where growth... ',
    imageUrl: utpul_tiwari
  },
  {
    name: 'Sundaram Pandey',
    position: 'IIT ROORKEE',
    description: "I had the honor of working as Joshua Kanatt's exceptional assistant for three months during my internship at Gamers Tag, and I heartily endorse him.He established an environment that was welcoming and encouraging from the beginning, fostering growth... ",
    imageUrl: sundaram
  },
  {
    name: 'Jayant Patara',
    position: 'IIIT SONEPAT',
    description: "I had the privilege of completing a 2-month internship under the exceptional guidance of Joshua Kanatt's at Gamers Tag, and I am delighted to recommend them wholeheartedly.From day one, they created an inclusive and supportive...",
    imageUrl: Jayant_patara
  },
  {
    name: 'Jibin Victor John',
    position: 'CEO At Btech Traders',
    description: "Joshua Kanatt's ability for making accurate product decisions and his architectural expertise contribute to the success of btech traders. Joshua consistently makes smart product decisions that appeal to customers because he has a strong sense of detail...",
    imageUrl:john
  }
  ,
  {
    name: 'Dibin Jose Vadakkan',
    position: 'US -Tax and Accounts Associate',
    description: "It's been a pleasure working with Joshua! His enthusiasm is contagious, and he seems to elevate us to new heights with each obstacle we face. Joshua is a unique leader since he empowers others in addition to leadership.Everyone feels...",
    imageUrl:dibin
  }
  ,
  {
    name: 'Kevin George',
    position: 'Game Designer / Developer',
    description: "During my tenure as a Unity Game Developer Intern under Joshua's leadership, I had the opportunity to witness firsthand his exceptional skills, dedication, and leadership qualities.Joshua consistently demonstrated a deep understanding of the...",
    imageUrl:kevin
  }
  ,
  {
    name: 'Arjun Gopi K',
    position: 'Full-stack Web developer',
    description: "I am truly delighted to have had the opportunity to work alongside Joshua Kannatt. From the outset, Joshua's belief in my abilities and his willingness to provide me with opportunities have been invaluable.His unwavering support and motivation...",
    imageUrl:arjun_gopi
  }
  ,
  {
    name: 'Ditto Johnson',
    position: 'SEO Executive',
    description: "I had a chance to work with him at Gamers tag. His expertise in digital marketing, product marketing, and how he develops game-changing strategies inspired me to think at a bigger picture in various instances. He is a pleasure to work with, encourages...",
    imageUrl:Johnson
  }
  ,
  {
    name: 'Shivansh Verma',
    position: 'SDE At Ringover France',
    description: "I am delighted to provide a glowing recommendation for Joshua, Founder of Gamerstag. Having collaborated closely for nearly a year, I've witnessed firsthand his remarkable conversational skills  and humble demeanor, which have greatly...",
    imageUrl:shivansh
  }
  ,
  {
    name: 'Aditya R.',
    position: 'IIIT SONEPAT',
    description: "Joshua Kanatt is a visionary leader with an unparalleled stint of technical knowledge in product architecture. His leadership style and entrepreneurial prowess have left a lasting impact on me.Under his guidance, the company's culture has thrived on...",
    imageUrl:aditya
  }
  ,
  {
    name: 'Nithin George ',
    position: 'Product Developer',
    description: "I have had the pleasure of working closely with Joshua over the past 5 years at Gamerstag. As the product designer and Joshua serving as the Founder and product lead, I have witnessed firsthand his exceptional skills and contributions.Joshua is...",
    imageUrl:nitin
  }
  ,
  {
    name: 'Numa Fathima',
    position: 'User Interface Designer At Finline',
    description: "I worked as a graphic design intern at Gamers Tag and my experience was made amazing by the mentorship of Joshua Kannat, CEO of Gamers Tag. Joshua isn't just a boss; he's a mentor, a friend who has helped me improve my design game...",
    imageUrl:Numa
  }
  ,
  {
    name: 'Ahammed Habeebi ',
    position: 'Designer|Animator|Storyteller',
    description: "I worked as a 3D Graphic Design Intern at Gamers Tag for two months. During my time there, I saw that Joshua is a great leader. He was one of the very few people with whom I have directly interacted and wondered how they manage the time ...",
    imageUrl:Ahmd
  }



];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.06,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.06,
          centerPadding: "30px",
        }

      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.08,
          centerPadding: "20px",
        }
      }
    ]
  };

  return (
    <Fade cascade damping={0.1}>
      <div className={styles.testimonialsSection} id="testimonials">
        <p className={styles.sectionTitle}>Testimonials</p>
        <div className={styles.testimonialsContainer}>
          <Slider {...settings}>

            {testimonialsData.map((testimonial, index) => (

              <a href={index === 0 ? "https://www.linkedin.com/in/utpal-tiwari-b6ab10203/"
                : index ===1 ? "https://www.linkedin.com/in/sundaram-pandey-155043237/"
                  : index === 2 ? "https://www.linkedin.com/in/jayantpatara24/"
                    :index===3 ? "https://www.linkedin.com/in/jibin-victor-john-73a330114/"
                  :index===4?"https://www.linkedin.com/in/dibin-jose-vadakkan-69109179/"
                :index===5?"https://www.linkedin.com/in/kevin-george-58b5701a1/"
                :index===6?"https://www.linkedin.com/in/arjun-gopi-k-324178253/"
                :index===7?"https://www.linkedin.com/in/ditto-johnson-941267249/"
                :index===8?"https://www.linkedin.com/in/meet-shivanshverma/"
                :index===9?"https://www.linkedin.com/in/theadityarawat/"
                :index===10?"https://www.linkedin.com/in/nithin-george-308a9458/"
                :index===11?"https://www.linkedin.com/in/numa-fathima-730159292/"
                :index===12?"https://www.linkedin.com/in/ahammed-habeebi-b4997021a/"
                :""}
                target='_blank'
              >
                <div
                  className={`${styles.testimonialCard} ${index % 2 != 0 ? styles.testimonialCardOdd : ''}`}
                  key={index}

                >

                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className={styles.testimonialImage}
                  />

                  <div>
                
                      <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                 
                    <p className={styles.testimonialPosition}>{testimonial.position}</p>
                    <p className={styles.testimonialDescription}>{testimonial.description}</p>
                  </div>


                  <a href="https://www.linkedin.com/in/joshuakanatt/details/recommendations/?detailScreenTabIndex=0" target='_blank'>
                    <button className={styles.mybtn}>Read More</button>
                  </a>

                </div>
              </a>


            ))}
          </Slider>
        </div>
      </div>
    </Fade>
  );
};

export default Testimonials;
