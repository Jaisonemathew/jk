import React from 'react';
import styles from './Articles&Blogs.module.css';
import casualgaming from '../../assets/Casual_gaming.png';
import DAO from '../../assets/DAO.png'

interface Article {
  title: string;
  description: string;
  source: string;
  publishedDate: string;
  imageUrl: string;
}

const articlesData: Article[] = [
  {
    title: 'Why casual gaming is a big challenge for Web3 and Meta ?',
    description: 'Emerging of web3 has got a huge attention with the across the globe in different domain and huge difference it has make in various aspects. Such technologies like Metaverse taken this standard to such a level to give the best experience for the social ecosystem to have a virtual experience. The web3 and Meta is highly customisable and may be used for anything where connection and community produce value, including networking, business, communications, the arts, and education, in addition to gamification.',
    source: 'LinkedIn',
    publishedDate: 'December 12, 2022',
    imageUrl: casualgaming
  },
  {
    title: 'Why DAO be the most important blockchain application for business in Future ?',
    description: 'There are often many technologies which helps business and enterprises and they are often seen as having the potential to revolutionise how businesses and organisations are run with a huge change. In addition, many public and commercial organisations are working hard to enable more decentralised, open, and effective decision-making processes in the modern world. Decentralised Autonomous Organisations, or DAOs, are going to be the next big thing in this industry, in my opinion.Because of numerous possibilities, many people think that DAO technology has a strong chance of influencing technology in the future.',
    source: 'LinkedIn',
    publishedDate: 'June 22, 2024',
    imageUrl: DAO
  }
];

const ArticlesAndBlogs: React.FC = () => {
  return (
    <div className={styles.articlesBlogsSection} id="articles">
      <p className={styles.sectionTitle}>Articles & Blogs</p>
      {articlesData.map((article, index) => (
        <div className={styles.articleCard} key={index}>
          <img src={article.imageUrl} alt="Article" className={styles.articleImage} />

          <div className={styles.articleContent}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <span>
              <p className={styles.articleDescription}>{article.description}</p>

              <a href={index === 0
                ? "https://www.linkedin.com/pulse/why-casual-gaming-big-challenge-web3-meta-joshua-kanatt/?trackingId=ioQG2iftQFOqFS00NDox5Q%3D%3D"
                : "https://www.linkedin.com/pulse/why-dao-most-important-blockchain-application-business-joshua-kanatt/?trackingId=RDHsfw2SQs%2BwoBOCIHuB0w%3D%3D"} >
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
    </div >
  );
};

export default ArticlesAndBlogs;
