import React, { useState } from 'react';
import styles from './Ed_j.module.css';
import HINDUSTHAN_UNIV from '../../assets/HINDUSTHAN_UNIV.svg';
import IIITB from '../../assets/IIITb.svg';
import IMT from '../../assets/IMT_with_white_circle.png';
import karunya from '../../assets/karunya_logo 1.svg';
import Liverpool from '../../assets/Liverpool.svg';
import stanford from '../../assets/stanford.svg';
import deakin_logo from '../../assets/Deakin.svg';
import ATAL from '../../assets/ATAL.svg';
import PDEU from '../../assets/PDEU.svg';
import CISCO from '../../assets/CISCO.svg';
import MICROSOFT from '../../assets/MICROSOFT.svg';
import RAZORPAY from '../../assets/RAZORPAY.svg';
import NASSCOM from '../../assets/NASSCOM.svg';
import gamersTag from '../../assets/Logo Gamers tag 1.png';
import btechTraders from '../../assets/btech 1.png';
import keltron from '../../assets/keltron 1.png';

interface EducationEntry {
  institution: string;
  degree: string;
  duration: string;
  logo: string;
}

interface StartupEntry {
  institution: string;
  description: string;
  duration: string;
  logo: string;
  location: string;
}

const EducationJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'career' | 'education' | 'startup'>('career');
  const [showCareer, setShowCareer] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showStartup, setShowStartup] = useState(false);

  const handleCareerClick = () => {
    setShowCareer(!showCareer);
    setShowEducation(false);
    setShowStartup(false);
  };

  const handleEducationClick = () => {
    setShowEducation(!showEducation);
    setShowStartup(false);
    setShowCareer(false);
  };

  const handleStartupClick = () => {
    setShowStartup(!showStartup);
    setShowEducation(false);
    setShowCareer(false);
  };

  const educationData: EducationEntry[] = [
    {
      institution: "Deakin University",
      degree: "Global Master of Business Administration (GMBA) in Leadership & Management",
      duration: "Jan 2023 - Feb 2025",
      logo: deakin_logo
    },
    {
      institution: "Stanford University Graduate School of Business",
      degree: "Cohort 06, Business Management & Entrepreneurship",
      duration: "Feb 2023 - Jul 2023",
      logo: stanford
    },
    {
      institution: "Institute of Management Technology, Ghaziabad",
      degree: "Advanced General Management Program",
      duration: "Dec 2022 - Dec 2023",
      logo: IMT
    },
    {
      institution: "Liverpool John Moores University",
      degree: "Master's degree, Data Science",
      duration: "Apr 2021 - Nov 2022",
      logo: Liverpool
    },
    {
      institution: "International Institute of Information Technology Bangalore",
      degree: "PGDM, DATA SCIENCE",
      duration: "Feb 2020 - Apr 2021",
      logo: IIITB
    },
    {
      institution: "Hindusthan College of Engineering and Technology",
      degree: "Bachelor of Engineering, Computer Science",
      duration: "2015 - 2019",
      logo: HINDUSTHAN_UNIV
    },
    {
      institution: "Karunya International Higher Secondary School",
      degree: "High School, Computer Science",
      duration: "Jun 2013 - Jun 2015",
      logo: karunya
    },
  ];

  const startupData: StartupEntry[] = [
    {
      institution: "Atal Incubation Centre - Pondicherry Engineering College Foundation (AIC-PECF)",
      description: "Startup Incubation, Entrepreneurship/ Entrepreneurial Studies",
      duration: "Aug 2023 - Present",
      logo: ATAL,
      location: "India"
    },
    {
      institution: "Pandit Deendayal Energy University (PDEU)",
      description: "Startup Incubation, Entrepreneurship/Entrepreneurial Studies",
      duration: "Feb 2023 - Present",
      logo: PDEU,
      location: "India"
    },
    {
      institution: "Incubate at Cisco Launchpad",
      description: "Cisco - Full-time",
      duration: "Jan 2023 - Present",
      logo: CISCO,
      location: "India"
    },
    {
      institution: "Microsoft Founder Hub Program",
      description: "Startup Member, Microsoft for Startups - Part-time",
      duration: "Nov 2022 - Present",
      logo: MICROSOFT,
      location: "India"
    },
    {
      institution: "Razor pay - Rize - Incubatee",
      description: "Razorpay - Full-time",
      duration: "Oct 2022 - Present",
      logo: RAZORPAY,
      location: "Remote"
    },
    {
      institution: "NASSCOM 10000 Startups - Incubation Program Member",
      description: "10000 Startups - Full-time",
      duration: "Aug 2022 - Present",
      logo: NASSCOM,
      location: "Kochi, Kerala, India"
    }
  ];

  return (
    <>
      <div className={styles.SectionTitle} id="my-journey">
        <p
          onClick={() => {
            setActiveTab('career');
            handleCareerClick();
          }}
          className={`${styles.tab} ${activeTab === 'career' ? styles.activeTab : ''}`}
        >
          Professional Career
        </p>


        <p
          onClick={() => {
            setActiveTab('education');
            handleEducationClick();
          }}
          className={`${styles.tab} ${activeTab === 'education' ? styles.activeTab : ''}`}
        >
          Education Career
        </p>

        <p
          onClick={() => {
            setActiveTab('startup');
            handleStartupClick();

          }}
          className={`${styles.tab} ${activeTab === 'startup' ? styles.activeTab : ''}`}
        >
          Startup Incubation
        </p>
      </div>

      <div className={`${styles.timeline} ${showEducation ? '' : styles.hidden}`}>
        {educationData.map((edu, index) => (
          <div
            className={`${styles.container} ${index % 2 === 0 ? styles.left_container : styles.right_container}`}
            key={index}
          >
            <div className={styles.text_box}>
              <img src={edu.logo} alt={`${edu.institution} logo`} className={styles.institution_logo} />
              <h3>{edu.institution}</h3>
              <p><strong>{edu.degree}</strong></p>
              <p>{edu.duration}</p>
              <span className={index % 2 === 0 ? styles.left_container_arrow : styles.right_container_arrow}></span>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.timeline} ${showStartup ? '' : styles.hidden}`}>
        {startupData.map((startup, index) => (
          <div
            className={`${styles.container} ${index % 2 === 0 ? styles.left_container : styles.right_container}`}
            key={index}
          >
            <div className={styles.text_box}>
              <img src={startup.logo} alt={`${startup.institution} logo`} className={styles.institution_logo} />
              <h3>{startup.institution}</h3>
              <p><strong>{startup.description}</strong></p>
              <p>{startup.duration}</p>
              <span className={index % 2 === 0 ? styles.left_container_arrow : styles.right_container_arrow}></span>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.tl} ${showCareer ? '' : styles.hidden}`}>
        <div className={`${styles.right_con} ${styles.right_con_1}`}>
          <span className={styles.right_con_arrow}></span>
          <div className={styles.entry}>
            <div className={styles.right_con_logo}>
              <img src={gamersTag} alt="Gamers Tag" />
            </div>
            <div className={styles.details}>
              <h3>GAMERS TAG</h3>
              <p className={styles.duration}>Full-time</p>
              <p className={styles.duration}>4 yrs 11 months</p>
              <br />
              <p className={styles.designation}>Founder & CEO</p>
              <p className={styles.duration}>May 2021 - Present</p>
              <p className={styles.location}>Kerala, India</p>
              <br />
              <p className={styles.designation}>Head of Product Development & Product Architect</p>
              <p className={styles.duration}>Jul 2020 - May 2021 · 11 mos</p>
              <p className={styles.location}>Kochi, Kerala, India</p>
              <br />
              <p className={styles.designation}>Research Development Lead</p>
              <p className={styles.duration}>Jul 2019 - Jun 2020 · 1 yr</p>
              <p className={styles.location}>Kochi, Kerala, India</p>
            </div>
          </div>
        </div>

        <div className={`${styles.left_con} ${styles.left_con_1}`}>
          <div className={styles.entry}>
            <span className={styles.left_con_arrow}></span>
            <div className={styles.left_con_logo}>
              <img src={btechTraders} alt="Btech Traders" />
            </div>
            <div className={styles.details}>
              <h3>Btech Traders</h3>
              <p className={styles.duration}>Full-time · 3 yrs</p>
              <p className={styles.duration}>8 months</p>
              <br />
              <p className={styles.designation}>Product Development Lead</p>
              <p className={styles.duration}>May 2019 - Feb 2021</p>
              <p className={styles.duration}>1 yr 10 mos</p>
              <br />
              <p className={styles.designation}>Product Designer Intern</p>
              <p className={styles.duration}>Jul 2017 - Apr 2019</p>
              <p className={styles.duration}>1 yr 10 months</p>
            </div>
          </div>
        </div>

        <div className={`${styles.right_con} ${styles.right_con_2}`}>
          <div className={styles.entry}>
            <span className={`${styles.right_con_arrow} ${styles.right_con_2_arrow}`}></span>
            <div className={styles.details}>
              <h3>PARKit - Advanced Parking System</h3>
              <p className={styles.designation}>Research Lead</p>
              <p className={styles.designation}>Self-employed</p>
              <p className={styles.duration}>Feb 2017 - Jun 2020</p>
              <p className={styles.duration}>3 yrs 5 mos</p>
              <p className={styles.duration}>Kerala, India · Hybrid</p>
            </div>
          </div>
        </div>

        <div className={`${styles.left_con} ${styles.left_con_2}`}>
          <div className={styles.entry}>
            <span className={styles.left_con_arrow}></span>
            <div className={styles.left_con_logo}>
              <img src={keltron} alt="Keltron" />
            </div>
            <div className={styles.details}>
              <h3>Keltron</h3>
              <p className={styles.designation}>Internship Trainee</p>
              <p className={styles.duration}>Part-time</p>
              <p className={styles.duration}>Oct 2017 - Nov 2017</p>
              <p className={styles.duration}>2 months</p>
              <p className={styles.duration}>Thrissur, Kerala, India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationJourney;
