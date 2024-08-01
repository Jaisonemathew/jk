import React from 'react';
import styles from './MyFeeds&post.module.css';
import postImage from '../../assets/MyFeeds&postImage.svg';
import image12 from '../../assets/Gallery/12.jpg';
import image13 from '../../assets/Gallery/13.jpg';
import { Fade } from "react-awesome-reveal";

const MyFeedsAndPosts: React.FC = () => {
    return (
        <div className={styles.container}>
            <Fade cascade damping={0.1}>
                <p className={styles.title}>My Feed & Posts</p>
                <p className={styles.subtitle}>Know more about the latest feeds and post on my socials</p>
                <div className={styles.Secondcontainer}>
                    <div className={styles.followText}>
                        <span className={styles.highlight}>Follow </span>
                        <span className={styles.highlight}>to be</span>
                        <span className={styles.highlight}>Facinated</span>
                    </div>
                    <div className={styles.postsContainer}>
                    <a href="https://www.linkedin.com/posts/joshuakanatt_entrepreneurship-technology-sports-activity-7045356679705591808-_LFM/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className={styles.postLink}>
    <div className={styles.post}>
        <span className={styles.headingOfPost}>
            <h3>Joshua Kanatt</h3>
            <p>LINKEDIN</p>
        </span>
        <p className={styles.secondPara}>
            Meeting great minds like Shradha Sharma, Dev Bajaj, Aditi Surana Swarup Bose Bhavik Koladiya at YourStory Techsparks 2023 was exciting because I got to learn about their inspiring journey and perceptive views on the convergence of technology and entrepreneurship.
        </p>
        <img src={image13} alt="Post" className={styles.postImage} />
    </div>
</a>

<a href="https://www.linkedin.com/posts/joshuakanatt_entrepreneur-tech-byjus-activity-6997232081630105600-ovNN?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className={styles.postLink}>
    <div className={styles.post}>
        <span className={styles.headingOfPost}>
            <h3>Joshua Kanatt</h3>
            <p>LINKEDIN</p>
        </span>
        <p className={styles.secondPara}>
            Wonderful meeting Ed-tech Legend BYJU RAVEENDRAN<br />
            #entrepreneur #tech #byjus #yourstory #techsparks2022 #edtech
        </p>
        <img src={image12} alt="Post" className={styles.postImage} />
    </div>
</a>

                        <div className={styles.post}>
                            <span className={styles.headingOfPost}>
                                <h3>Joshua Kanatt</h3>
                                <p>LINKEDIN</p>
                            </span>
                            <p className={styles.secondPara}>I strongly believe that gaming industry is set to thrive like never before in 2024, and it's not just about the numbers – it's about the diversity and innovation transforming the landscape. From casual games to competitive gaming, the industry is a playground for everyone. With a projected global gaming market value of $286.8 billion in 2025 and mobile games leading the charge. It's not just about gaming for fun; it's a serious business with an expected annual growth rate of 10.69% through 2028 .</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default MyFeedsAndPosts;