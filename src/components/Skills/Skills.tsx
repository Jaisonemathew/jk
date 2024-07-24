import iosimage from "../../assets/IOS.webp";
import img1 from "../../assets/skills/1.webp";
import img2 from "../../assets/skills/2.webp";
import img3 from "../../assets/skills/3.webp";
import img4 from "../../assets/skills/4.webp";
const Skills = () => {
  return (
   <>
   <p className="mt-10 text-4xl poppins-bold gradient text-center" id="skills">My Skills</p><br></br>
      {/* Skills Part */}
<div className="md:flex">      
<div className="">
<div className="md:w-82 h-82 m-8 rounded-2xl p-8 flex flex-col justify-center items-center bg-newblack">
    <img src={img1} alt="1"></img><br></br>
    <p className="uppercase dm-sans-700">Product Management</p>
    <p className="mt-4 poppins-extralight">Having a great vision to forecast product growth, With strong understanding of business model creation, product architecture, product design, marketing, financial metrics, scalability, and continuous learning. My strong market validation with conversation with  10,000 like Top VCs, angels, HNIs, top executives, and professionals. </p>
</div>
<div className="md:w-82 h-82 m-8 rounded-2xl p-8 flex flex-col justify-center items-center bg-newblack">
    <img src={img2} alt="1"></img><br></br>
    <p className="uppercase dm-sans-700">MARKETING & Brand Building </p>
    <p className="mt-4 poppins-extralight">With Strong Experience in Marketing & Stratergising have helped over 30+ brands. My deeper interest targeting on Affiliated marketing also creating in-app marketing element also using data analytics for post analytics to have higher engagement with TA. My passion for graphics and brand visualization fuels me to make brand with world class standards.. </p>
</div>
</div>
{/* Middle Image */}


<div className="">
  <img src={iosimage} alt="Image" className="mt-8 md:h-83 md:max-w-[518px]"></img>
</div>


<div className="">
<div className="md:w-82 h-82  m-8 rounded-2xl p-8 flex flex-col justify-center items-center bg-newblack">
    <img src={img3} alt="1"></img><br></br>
    <p className="uppercase dm-sans-700">Business Development & Management</p>
    <p className="mt-4 poppins-extralight">With extensive experience in business development and management, I have successfully driven growth and fostered innovation across various industries. My skills in negotiation, project management, and stakeholder engagement ensure that projects are executed smoothly and deliver maximum value.  </p>
</div>
    <div className="md:w-82 h-82  m-8 rounded-2xl p-8 flex flex-col justify-center items-center bg-newblack">
    <img src={img4} alt="1"></img><br></br>
    <p className="uppercase dm-sans-700">Data Analyst</p>
    <p className="mb-15 mt-4 poppins-extralight">With solid experience in Data analytics and Business analytics. Created over 5+ Professional projects and research paper helped me take solid decision for the brand based on the statistics and key numbers attained from the detailed analytical report.


</p>
</div>
</div>
</div> 
   </>
  )
}

export default Skills