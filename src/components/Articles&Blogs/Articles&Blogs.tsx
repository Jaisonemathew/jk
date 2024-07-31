import React from 'react';
import styles from './Articles&Blogs.module.css';
import casualgaming from '../../assets/Casual_gaming.png';
import DAO from '../../assets/DAO.png'
import { Fade } from 'react-awesome-reveal';
import filmIndustry from '../../assets/Film_industry.png'
import R_filmindustry from '../../assets/R_filmIndustry.jpeg'
import Navic from '../../assets/Navic.png'
import blockchain from '../../assets/blockchain.jpg'
import messi from '../../assets/messi.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Article {
  title: string;
  description: string;
  source: string;
  publishedDate: string;
  imageUrl: string;
}

const articlesData: Article[] = [

  {
    title: 'Future of the Film Industry: 14 Ways Artificial Intelligence and Game Engines Will Shape Film industry',
    description: 'As the film industry embarks on a new era of cinematic innovation, it finds itself at the crossroads of technology and imagination. In a world where AI and gaming engines are merging, narrative takes on new dimensions. A digital revolution is shaping the future of film, from the creation of movies affected by machine-generated creativity to the intricate dance between filmmakers and virtual worlds. Notwithstanding the promise of efficiency and visual spectacle, ethical concerns, workflow integration, and the preservation of human touch remain. ',
    source: 'LinkedIn',
    publishedDate: 'November 15, 2023',
    imageUrl: filmIndustry
  },
  {
    title: 'Revolutionising Film Industry: The Unlikely Fusion of Unreal Engine and AI - A Cinematic Odyssey into the Future',
    description: 'The worlds of filmmaking and the video game industry are experiencing an unprecedented alliance, and at the forefront of this innovative collaboration is the unexpected ally—Unreal Engine. Films such as  Adipurush, RRR and Ponniyin Selvan: I,2’ are not only earning acclaim for their compelling narratives but are also captivating audiences with visually stunning sequences made possible by the seamless integration of Unreal Engine into the filmmaking process. Originally conceived as a gaming engine, Unreal Engine has evolved into a revolutionary tool for filmmakers and VFX directors, offering a platform to craft intricate and realistic visual effects.',
    source: 'LinkedIn',
    publishedDate: 'November 13, 2023',
    imageUrl: R_filmindustry
  },
  {
    title: 'Proud Moment For India: India’s Very Own Desi GPS "​ NavIC "​ , Why its better than GPS ? Awesome Things to Know !!',
    description: 'NavIC (Navigation with Indian Constellation) is designed to provide “more accurate domestic navigation” for users in India. It’s designed by ISRO for accurate real-time positioning, timing services, and messaging. Even while India is slightly behind schedule in developing its own satellite navigation system, it represents a significant progress as so far only a small number of nations have joined the elite group. A national navigation satellite system called NavIC was developed by India for India. ISRO created it for precise real-time communications, timing, and location.',
    source: 'LinkedIn',
    publishedDate: 'February 9, 2023',
    imageUrl: Navic
  }
  ,
  {
    title: 'An Overview on Blockchain Technology in 2022 : Statistics, Market Trends, News, User growth',
    description: `In 2022, one of the most sensational technological in the world right now is blockchain. It is a distributed, encrypted database paradigm that holds efficient solutions for several issues relating to public trust and security online.Currently, Blockchain industry is worth $11.54 billion. This is the estimated valuation of the global blockchain technology industry as of 2022, and it’s expected to grow to be worth $162.84 billion by 2027. The blockchain industry is growing by a CAGR of 85.9%. This is the estimated compound annual growth rate from 2022 to 2030.`,
    source: 'LinkedIn',
    publishedDate: 'January 23, 2023',
    imageUrl: blockchain
  },
  {
    title: 'Why DAO be the most important blockchain application for business in Future ?',
    description: 'There are often many technologies which helps business and enterprises and they are often seen as having the potential to revolutionise how businesses and organisations are run with a huge change. In addition, many public and commercial organisations are working hard to enable more decentralised, open, and effective decision-making processes in the modern world. Decentralised Autonomous Organisations, or DAOs, are going to be the next big thing in this industry, in my opinion.Because of numerous possibilities, many people think that DAO technology has a strong chance of influencing technology in the future.',
    source: 'LinkedIn',
    publishedDate: 'January 11, 2023',
    imageUrl: DAO
  },
  {
    title: 'How AI helped Messi and Argentina for their Historic win in FIFA WORLD CUP 2022 at Qatar ?',
    description: `One of the historic matches ever in the football history Argentina vs France Worldcup final 2022, During the time on extra-time Messi scored a wonderful goal. Did you noticed line referee has called for off-side and goal was awarded by main referee immediately. Where Ultimately the line-referee had a false judgement by disallowing goal. On the same time the main referee Szymon Marciniak watch clearly displayed the goal. How it possible ? If the traditional methodology of analysis is used the goal would not had counted and which could have changed the whole game.`,
    source: 'LinkedIn',
    publishedDate: 'December 19, 2022',
    imageUrl: messi
  },
  {
    title: 'Why casual gaming is a big challenge for Web3 and Meta ?',
    description: 'Emerging of web3 has got a huge attention with the across the globe in different domain and huge difference it has make in various aspects. Such technologies like Metaverse taken this standard to such a level to give the best experience for the social ecosystem to have a virtual experience. The web3 and Meta is highly customisable and may be used for anything where connection and community produce value, including networking, business, communications, the arts, and education, in addition to gamification.',
    source: 'LinkedIn',
    publishedDate: 'December 12, 2022',
    imageUrl: casualgaming
  }
];
const ArticlesAndBlogs: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    pauseOnHover: true
  };
  return (
    <Fade>
      <div className={styles.articlesBlogsSection} id="articles">
        <p className={styles.sectionTitle}>Articles & Blogs</p>
        <Slider {...settings} className={styles.slickslider}>
          {articlesData.map((article, index) => (
            <div className={styles.articleCard} key={index}>
              <img src={article.imageUrl} alt="Article" className={styles.articleImage} />

              <div className={styles.articleContent}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <span>
                  <p className={styles.articleDescription}>{article.description}</p>

                  <a href={index === 0
                    ? "https://www.linkedin.com/pulse/future-film-industry-14-ways-artificial-intelligence-game-kanatt-wzcsc/?trackingId=l3mm2XYhRKWnO6WaM7ULNA%3D%3D"
                    : index === 1
                      ? "https://www.linkedin.com/pulse/revolutionising-film-industry-unlikely-fusion-unreal-engine-kanatt-vmgsc/?trackingId=l3mm2XYhRKWnO6WaM7ULNA%3D%3D"
                      : index === 2
                        ? "https://www.linkedin.com/pulse/proud-moment-india-indias-very-own-desi-gps-navic-why-joshua-kanatt/?trackingId=l3mm2XYhRKWnO6WaM7ULNA%3D%3D"
                    : index===3
                    ? "https://www.linkedin.com/pulse/overview-blockchain-technology-2022-statistics-market-joshua-kanatt/?trackingId=l3mm2XYhRKWnO6WaM7ULNA%3D%3D"
                    : index===4
                    ? "https://www.linkedin.com/pulse/why-dao-most-important-blockchain-application-business-joshua-kanatt/?trackingId=l3mm2XYhRKWnO6WaM7ULNA%3D%3D"
                    : index===5
                    ? "https://www.linkedin.com/pulse/how-ai-helped-argentina-historic-win-fifa-world-cup-2022-kanatt/?trackingId=l3mm2XYhRKWnO6WaM7ULNA%3D%3D"
                    : index===6
                    ? "https://www.linkedin.com/pulse/how-ai-helped-argentina-historic-win-fifa-world-cup-2022-kanatt/?trackingId=l3mm2XYhRKWnO6WaM7ULNA%3D%3D"

                    : ""} >
                    <button className={styles.mybtn}>Read More...</button>
                  </a>
                </span>
                <div className={styles.articleFooter}>
                  <span className={styles.articleSource}>Source: {article.source}</span>
                  <span className={styles.articlePublishedDate}>Published on: {article.publishedDate}</span>
                </div>
              </div>


            </div>
          ))
          }
        </Slider>
      </div >
    </Fade>
  );
};

export default ArticlesAndBlogs;
