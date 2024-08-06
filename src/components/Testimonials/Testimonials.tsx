import React, { useState } from 'react';
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
    description: `It has been an absolute privilege to work under the guidance of Joshua Kanatt, CEO of GamersTag Pvt Ltd. Joshua Sir has consistently been a beacon of inspiration throughout my tenure as a Flutter developer, fostering an environment where growth and excellence thrive. His unwavering support and mentorship have not only accelerated my technical skills but also nurtured my personal development. Joshua's profound belief in continuous learning has empowered me to embrace challenges head-on and expand my capabilities in innovative ways.

Under his leadership, I have had the opportunity to contribute meaningfully to projects that push boundaries in the gaming industry. His keen insights and strategic guidance have been instrumental in refining my approach to problem-solving and enhancing user experiences through cutting-edge technologies like the Lottie animation package. Joshua's dedication to fostering a collaborative culture at GamersTag has cultivated a work environment where creativity flourishes and team synergy drives success. His encouragement to explore new ideas and methodologies has been pivotal in shaping my professional journey, instilling in me a deep sense of purpose and commitment to delivering excellence.

In conclusion, I am deeply grateful to Sir for his mentorship, belief in my potential, and unwavering support. His leadership at GamersTag is a testament to his visionary outlook and commitment to innovation in the gaming industry. I wholeheartedly recommend Joshua Kanatt as a leader who not only inspires greatness but also cultivates a culture of achievement and growth within his team. `,
    imageUrl: utpul_tiwari
  },
  {
    name: 'Sundaram Pandey',
    position: 'IIT ROORKEE',
    description: `I had the honor of working as Joshua Kanatt's exceptional assistant for three months during my internship at Gamers Tag, and I heartily endorse him.

He established an environment that was welcoming and encouraging from the beginning, fostering growth on both a personal and professional level. He regularly offered insightful commentary and constructive criticism that really improved my educational experience.

I am incredibly appreciative of the opportunity to work under Joshua Kanatt's guidance. He made a major contribution to my professional growth, and I have no doubt that many others will continue to be inspired and guided in their careers by his outstanding leadership. He is really helpful, showing me how to pick things up quickly and allowing me the time I need to finish my assignments.`,
    imageUrl: sundaram
  },
  {
    name: 'Jayant Patara',
    position: 'IIIT SONEPAT',
    description: `I had the privilege of completing a 2-month internship under the exceptional guidance of Joshua Kanatt at Gamers Tag, and I am delighted to recommend them wholeheartedly.

From day one, they created an inclusive and supportive environment that fostered both personal and professional growth. They consistently shared valuable insights and feedback that significantly enhanced my learning experience.

I am immensely grateful for the opportunity to work under Joshua Kanatt's mentorship. He have significantly contributed to my professional development, and I am confident that their exceptional leadership will continue to inspire and guide many more individuals in their careers.`,
    imageUrl: Jayant_patara
  },
  {
    name: 'Jibin Victor John',
    position: 'CEO At Btech Traders',
    description: `Joshua Kanatt's ability for making accurate product decisions and his architectural expertise contribute to the success of btech traders. Joshua consistently makes smart product decisions that appeal to customers because he has a strong sense of detail and a thorough awareness of customer demands. His aptitude for ideation and product architecture makes it possible to create innovative in multiple experiences that enthrall audiences and establish new benchmarks for the sector.

In addition, Joshua's ability to come up with creative solutions and work through challenging issues helps Gamers Tag advance in a constantly changing environment. Joshua's creative and inventive approach to every task, be it improving user interfaces or gaming mechanics, is evident. His dedication to pushing limits and investigating uncharted territory guarantees that Gamers Tag will always be at the forefront of technical innovation in the gaming sector.

 Joshua's adept problem-solving skills are instrumental in overcoming obstacles and driving continuous improvement. By analyzing data insights and leveraging his technical expertise, Joshua identifies areas for enhancement and implements effective solutions that elevate the gaming experience for players worldwide. His proactive approach to problem-solving fosters a culture of innovation within Gamers Tag, inspiring teams to push the envelope and strive for excellence in every aspect of product development.`,
    imageUrl: john
  }
  ,
  {
    name: 'Dibin Jose Vadakkan',
    position: 'US -Tax and Accounts Associate',
    description: "It's been a pleasure working with Joshua! His enthusiasm is contagious, and he seems to elevate us to new heights with each obstacle we face. Joshua is a unique leader since he empowers others in addition to leadership. Everyone feels appreciated and inspired to perform at their highest level thanks to the environment he's established. And his understanding of finance and multiple areas with his tech expertise is astounding. He's given me a completely fresh perspective on the world, which has enabled me to make better decisions for our team. Joshua inspires me to strive for excellence every day. I am truly inspired by his vision and drive, and I am appreciative of the path he has led me on.",
    imageUrl: dibin
  }
  ,
  {
    name: 'Kevin George',
    position: 'Game Developer',
    description: `During my tenure as a Unity Game Developer Intern under Joshua's leadership, I had the opportunity to witness firsthand his exceptional skills, dedication, and leadership qualities.

Joshua consistently demonstrated a deep understanding of the gaming industry and a strategic vision that propelled our projects to success.

As a CEO, Joshua's commitment to fostering a positive work environment was evident. He encouraged collaboration, creativity, and innovation, which greatly contributed to our team's productivity and morale. His mentorship and guidance were invaluable to me, helping me grow both professionally and personally.

Furthermore, Joshua's strong decision-making abilities and problem-solving skills were instrumental in overcoming challenges and achieving project milestones. His passion for the industry and dedication to excellence were inspiring and motivated the entire team to strive for greatness.

 His leadership qualities, industry knowledge, and commitment to fostering a supportive work environment make him a valuable asset to any organization.`,
    imageUrl: kevin
  }
  ,
  {
    name: 'Arjun Gopi K',
    position: 'Full-stack Web developer',
    description: "I am truly delighted to have had the opportunity to work alongside Joshua Kannatt. From the outset, Joshua's belief in my abilities and his willingness to provide me with opportunities have been invaluable. His unwavering support and motivation have continually pushed me to surpass my own limits, for which I am sincerely grateful. I cannot thank Joshua enough for the trust he has placed in me and the encouragement he has provided along the way. It is without hesitation that I recommend Joshua to anyone seeking to enhance their professional journey. His dedication, mentorship, and commitment to excellence make him an exceptional colleague and leader. Joshua's passion for fostering growth and development in others is truly commendable, and I have no doubt that he will continue to inspire and empower those around him as he progresses in his career.",
    imageUrl: arjun_gopi
  }
  ,
  {
    name: 'Ditto Johnson',
    position: 'SEO Executive',
    description: "I had a chance to work with him at Gamers tag. His expertise in digital marketing, product marketing, and how he develops game-changing strategies inspired me to think at a bigger picture in various instances. He is a pleasure to work with, encourages confidence in me, pushes me to improve, and helps me forecast my next moves in a number of situations. I'm also motivated to collaborate with him by his vision and consiquitenes. It gives me great pleasure to offer Joshua, the founder of Gamerstag, my highest recommendation. After working directly with him for almost a year, I have seen personally how his exceptional conversational abilities and modesty have improved our team conversations. Joshua creates a welcoming atmosphere where everyone's opinion is respected, which facilitates easy and effective teamwork. I wholeheartedly endorse him for his outstanding leadership and commendable contributions to Gamerstag. He is a visionary leader with an unparalleled stint of technical knowledge.",
    imageUrl: Johnson
  }
  ,
  {
    name: 'Shivansh Verma',
    position: 'SDE At Ringover France',
    description: "I am delighted to provide a glowing recommendation for Joshua, Founder of Gamerstag. Having collaborated closely for nearly a year, I've witnessed firsthand his remarkable conversational skills and humble demeanor, which have greatly enhanced our team dynamics. His exceptional decision-making abilities have been pivotal in steering our startup towards success. Joshua fosters an inclusive environment where everyone's voice is valued, making collaboration effortless and productive. I wholeheartedly endorse him for his outstanding leadership and commendable contributions to Gamerstag.",
    imageUrl: shivansh
  }
  ,
  {
    name: 'Aditya R.',
    position: 'IIIT SONEPAT',
    description: `Joshua Kanatt is a visionary leader with an unparalleled stint of technical knowledge in product architecture. His leadership style and entrepreneurial prowess have left a lasting impact on me.

Under his guidance, the company's culture has thrived on creativity and collaboration. His open-door policy and resilience in the face of challenges set a remarkable example. His entrepreneurial spirit and strategic vision is destined to position GAMERS TAG as a key player in the industry.

The product architecture reflects the company's forward-thinking approach. The meticulous design and integration of technology showcase a commitment to delivering a superior gaming experience. The emphasis on scalability and innovation sets GAMERS TAG apart with Joshua at the core of it all.`,
    imageUrl: aditya
  }
  ,
  {
    name: 'Nithin George ',
    position: 'Product Developer',
    description: `I have had the pleasure of working closely with Joshua over the past 5 years at Gamerstag. As the product designer and Joshua serving as the Founder and product lead, I have witnessed firsthand his exceptional skills and contributions.

Joshua is not just a founder, product designer, and business strategist, but a true visionary who brings creativity and strategic thinking to every project. His ability to seamlessly integrate design principles with business strategy sets him apart in our industry. Joshua led our team in a very creative way, where his innovative approach not only met but exceeded our expectations.

One of Joshua's standout qualities is his leadership. As the founder of [his company], he has demonstrated an unwavering commitment to fostering a collaborative and innovative work culture. His ability to inspire and lead cross-functional teams has been instrumental in the success of our projects. Joshua's leadership style is not only visionary but also inclusive, making everyone feel valued and motivated.

In addition to his strategic mindset and leadership skills, Joshua's prowess in product design is truly commendable. He consistently delivers designs that not only meet user needs but also elevate the overall user experience. His attention to detail, combined with a deep understanding of market trends, has contributed significantly to our company's success.

Beyond his professional skills, Joshua is a pleasure to work with. He brings a positive energy to the team, fostering a collaborative and enjoyable work environment. His ability to communicate complex ideas with clarity ensures that everyone is on the same page, creating a smooth workflow.

I wholeheartedly recommend Joshua for any venture or project that requires a unique blend of entrepreneurial spirit, design acumen, and strategic thinking. His passion for innovation and dedication to excellence make him an invaluable asset to any team.

If you have any questions or would like more details, feel free to reach out to me directly.`,
    imageUrl: nitin
  }
  ,
  {
    name: 'Numa Fathima',
    position: 'User Interface Designer At Finline',
    description: `I worked as a graphic design intern at Gamers Tag and my experience was made amazing by the mentorship of Joshua Kannat, CEO of Gamers Tag. Joshua isn't just a boss; he's a mentor, a friend who has helped me improve my design game with wonderful insights. 

His friendly and understanding approach, coupled with effective guidance, brought out the best in me. What stands out about Joshua is how cool he is with new ideas and talking things through. His way of leading creates this relaxed and team-friendly spirit that has made my time at Gamers Tag super awesome. I think what's great about Joshua is that he's not just a boss; he really looks out for everyone in the team, helping us grow and stuff.

I am sincerely grateful to Joshua for creating an enriching learning experience that has contributed significantly to my development as a designer. I wholeheartedly recommend him for the role of CEO and mentor and am confident that his leadership will continue to have a positive impact on the company.`,
    imageUrl: Numa
  }
  ,
  {
    name: 'Ahammed Habeebi ',
    position: `Designer|Animator`,
    description: `I worked as a 3D Graphic Design Intern at Gamers Tag for two months. During my time there, I saw that Joshua is a great leader. He was one of the very few people with whom I have directly interacted and wondered how they manage the time to do all that they do. Throughout my internship period he was in constant contact with me, guiding me to better myself as a designer. More than the advices he gave me , it was how he communicated those advices to me that was more impactful. 

Joshua is really chill, easy to talk to and is always open to hearing what I had to say. The working environment was super calm and composed under him yet he was able to make sure the work was done on time. He is one of the finest examples of a leader I have personally known in my life and I am hoping that he will reach great heights. I recommend Joshua Kanatt as a CEO and mentor. He's a great leader who cares about his team, knows about the industry in abundance and is always ready to help you grow.`,
    imageUrl: Ahmd
  }



];

const Testimonials: React.FC = () => {

  const [expandedIndex, setExpendedIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setExpendedIndex(expandedIndex === index ? null : index);
  }
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

              <div
                className={`${styles.testimonialCard} ${index % 2 != 0 ? styles.testimonialCardOdd : ''}`}
                key={index}

              >
                <a href={index === 0 ? "https://www.linkedin.com/in/utpal-tiwari-b6ab10203/"
                  : index === 1 ? "https://www.linkedin.com/in/sundaram-pandey-155043237/"
                    : index === 2 ? "https://www.linkedin.com/in/jayantpatara24/"
                      : index === 3 ? "https://www.linkedin.com/in/jibin-victor-john-73a330114/"
                        : index === 4 ? "https://www.linkedin.com/in/dibin-jose-vadakkan-69109179/"
                          : index === 5 ? "https://www.linkedin.com/in/kevin-george-58b5701a1/"
                            : index === 6 ? "https://www.linkedin.com/in/arjun-gopi-k-324178253/"
                              : index === 7 ? "https://www.linkedin.com/in/ditto-johnson-941267249/"
                                : index === 8 ? "https://www.linkedin.com/in/meet-shivanshverma/"
                                  : index === 9 ? "https://www.linkedin.com/in/theadityarawat/"
                                    : index === 10 ? "https://www.linkedin.com/in/nithin-george-308a9458/"
                                      : index === 11 ? "https://www.linkedin.com/in/numa-fathima-730159292/"
                                        : index === 12 ? "https://www.linkedin.com/in/ahammed-habeebi-b4997021a/"
                                          : ""}
                  target='_blank'
                >

                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className={styles.testimonialImage}
                  />

                  <div>

                    <h3 className={styles.testimonialName}>{testimonial.name}</h3>

                    <p className={styles.testimonialPosition}>{testimonial.position}</p>
                    <p className={styles.testimonialDescription}>
                      {expandedIndex === index
                        ? testimonial.description
                        : `${testimonial.description.substring(0, 200)}...`}
                    </p>
                  </div>

                </a>


                <button className={styles.mybtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle(index);
                  }}>

                  {expandedIndex === index ? 'Read less' : 'Read More'}
                </button>


              </div>


            ))}
          </Slider>
        </div>
      </div >
    </Fade >
  );
};

export default Testimonials;
