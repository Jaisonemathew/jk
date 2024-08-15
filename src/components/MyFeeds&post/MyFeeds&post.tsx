import React from 'react';
import styles from './MyFeeds&post.module.css';
import image12 from '../../assets/Gallery/12.jpg';
import image13 from '../../assets/Gallery/13.jpg';
import image14 from '../../assets/Gallery/14.jpg';
import image15 from '../../assets/Gallery/15.jpg';
import image16 from '../../assets/Gallery/16.png';
import image17 from '../../assets/Gallery/17.jpg';
import image18 from '../../assets/Gallery/18.jpg';
import image19 from '../../assets/Gallery/19.png';
import image20 from '../../assets/Gallery/20.jpg';
import { Fade } from "react-awesome-reveal";

const MyFeedsAndPosts: React.FC = () => {



    const posts = [
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: "Meeting great minds like Shradha Sharma, Dev Bajaj, Aditi Surana Swarup Bose Bhavik Koladiya at YourStory Techsparks 2023 was exciting because I got to learn about their inspiring journey and perceptive views on the convergence of technology and entrepreneurship.",
            image: image13, // Make sure to import or define image13
            link: "https://www.linkedin.com/posts/joshuakanatt_entrepreneurship-technology-sports-activity-7045356679705591808-_LFM/?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: "Wonderful meeting Ed-tech Legend BYJU RAVEENDRAN",
            image: image12, // Make sure to import or define image12
            link: "https://www.linkedin.com/posts/joshuakanatt_entrepreneur-tech-byjus-activity-6997232081630105600-ovNN?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: "I'm thrilled to announce that I've been selected for the prestigious Stanford Seed Program 2023 for startups. This is a wonderful accomplishment and a great chance for me to develop, learn, and advance GAMERS TAG Read More...",
            image: image14, // Make sure to import or define image14
            link: "https://www.linkedin.com/posts/joshuakanatt_entrepreneur-tech-byjus-activity-6997232081630105600-ovNN?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: " A thriving entrepreneur is a dedicated learner, turning each challenge into a classroom and every setback into a stepping stone. I have successfully completed Masters in Data Science from Liverpool John Moores University and Advanced General Management Program (PGDM ) from Institute of Management Technology, Ghaziabad. Read More...",
            image: image15, // Make sure to import or define image15
            link: "https://www.linkedin.com/posts/joshuakanatt_a-thriving-entrepreneur-is-a-dedicated-activity-7162072490641383424-IAMR/?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: "I'm thrilled to announce that I have successfully completed the prestigious Stanford Seed Spark Program by representing GAMERS TAG . This program has been an incredible journey, specially designed for early-stage entrepreneurs like me, and it has truly transformed my mindset and approach towards entrepreneurship. Read More...",
            image: image17, // Make sure to import or define image17
            link: "https://www.linkedin.com/posts/joshuakanatt_im-thrilled-to-announce-that-i-have-activity-7088034104394338304-Y-sG/?utm_source=share&utm_medium=member_desktop"
        },
        
    ];

    const posts1=[
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: "AI and other technology have had a significant effect on Messi and Argentina's historic victory in the 2022 World Cup. The outcome of the game may have been altered if the traditional methods of analysis had been applied and the goal had not been counted. Read my article for more information.",
            image: image16, // Make sure to import or define image16
            link: "https://www.linkedin.com/posts/joshuakanatt_argentinavsfrance-worldcup2022-messi-activity-7010537220025585664-xCjC/?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: "I'm fascinated by how the movie Industry will enter a new era of cinematic creativity, finding itself at the intersection of technology and imagination. As graphic engines broaden cinema's visual possibilities, the link between gaming and filmmaking demonstrates the boundless possibility that emerges when technology and imagination come together. Sharing my research and thoughts in future landscape of Film Industry.",
            image: image19, // Make sure to import or define image19
            link: "https://www.linkedin.com/posts/joshuakanatt_ai-movie-filmmaking-activity-7130494647595892736-E8NF/?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: "It’s very promising to witness an exciting future for film industry and emerging visual experience in the entertainment landscape. Embracing this technological evolution is not just a leap forward for filmmakers; it's a testament to the dynamic and boundless potential at the intersection of gaming innovation and cinematic excellence",
            image: image18, // Make sure to import or define image18
            link: "https://www.linkedin.com/posts/joshuakanatt_gaming-unrealengine-unrealengine5-activity-7129872570866167810-3P7T/?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: "I am incredibly inspired by the remarkable achievements of our Indian athletes in 2023. Their dedication, passion, and relentless pursuit of excellence mirror the qualities that drive to be successful. These athletes have overcome challenges and pushed boundaries to reach new heights. As a founders, entrepreneur journey is filled with ups and downs, their achievements remind us that with unwavering focus and a strong team, we can overcome any obstacle and achieve our vision",
            image: image20, // Make sure to import or define image20
            link: "https://www.linkedin.com/posts/joshuakanatt_india-indiansports-historicwins-activity-7108703588369010688-QqGB/?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Joshua Kanatt",
            platform: "LINKEDIN",
            content: "I strongly believe that gaming industry is set to thrive like never before in 2024, and it's not just about the numbers – it's about the diversity and innovation transforming the landscape. From casual games to competitive gaming, the industry is a playground for everyone. With a projected global gaming market value of $286.8 billion in 2025 and mobile games leading the charge. It's not just about gaming for fun; it's a serious business with an expected annual growth rate of 10.69% through 2028 .",
            image: null, // No image for this post
            link: null // No link for this post
        }
        
        
    ];



    return (
        <div className={styles.container}>
            <Fade cascade damping={0.1}>
                <p className={styles.title}>My Feed & Posts</p>
                <p className={styles.subtitle}>Know more about the latest feeds and post on my socials</p>
                <div className={styles.Postscontainer}>
                    <div className={styles.followText}>
                        <span className={styles.highlight}>Follow </span>
                        <span className={styles.highlight}>to be</span>
                        <span className={styles.highlight}>Facinated</span>
                    </div>

                    <div className={styles.firstContainer}>
                        <div className={styles.magic}
                        >
                            {posts.map((post, index) => (
                                
                                <a key={index} href={post.link ? post.link : '#'} target="_blank" rel="noopener noreferrer" className={styles.postLink}>
                                    <div className={styles.post}>
                                        <span className={styles.headingOfPost}>
                                            <h3>{post.name}</h3>
                                            <p>{post.platform}</p>
                                        </span>
                                        <p className={styles.secondPara}>
                                            {post.content}
                                        </p>
                                        {post.image && <img src={post.image} alt="Post" className={styles.postImage} />}
                                    </div>
                                </a>
                                
                            ))}


                        </div>
                        <div className={styles.magic}>
                            {posts.map((post, index) => (
                            
                                <a key={index} href={post.link ? post.link : '#'} target="_blank" rel="noopener noreferrer" className={styles.postLink}>
                                    <div className={styles.post}>
                                        <span className={styles.headingOfPost}>
                                            <h3>{post.name}</h3>
                                            <p>{post.platform}</p>
                                        </span>
                                        <p className={styles.secondPara}>
                                            {post.content}
                                        </p>
                                        {post.image && <img src={post.image} alt="Post" className={styles.postImage} />}
                                    </div>
                                </a>
                                
                            ))}


                        </div>

                    </div>
                    <div className={`${styles.secondContainer}`}>
                        <div className={styles.magic}>
                            {posts1.map((post, index) => (
                                <a key={index} href={post.link ? post.link : '#'} target="_blank" rel="noopener noreferrer" className={styles.postLink}>
                                    <div className={styles.post}>
                                        <span className={styles.headingOfPost}>
                                            <h3>{post.name}</h3>
                                            <p>{post.platform}</p>
                                        </span>
                                        <p className={styles.secondPara}>
                                            {post.content}
                                        </p>
                                        {post.image && <img src={post.image} alt="Post" className={styles.postImage} />}
                                    </div>
                                </a>
                            ))}


                        </div>
                        <div className={styles.magic}>
                            {posts1.map((post, index) => (
                                <a key={index} href={post.link ? post.link : '#'} target="_blank" rel="noopener noreferrer" className={styles.postLink}>
                                    <div className={styles.post}>
                                        <span className={styles.headingOfPost}>
                                            <h3>{post.name}</h3>
                                            <p>{post.platform}</p>
                                        </span>
                                        <p className={styles.secondPara}>
                                            {post.content}
                                        </p>
                                        {post.image && <img src={post.image} alt="Post" className={styles.postImage} />}
                                    </div>
                                </a>
                            ))}


                        </div>

                    </div>


                </div>
            </Fade>
        </div>
    );
};

export default MyFeedsAndPosts;