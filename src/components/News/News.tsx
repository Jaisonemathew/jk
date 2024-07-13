import news from '../../assets/news.png'
import business from '../../assets/image 51.png'
import "./News.css"
const News = () => {
  return (
   
<>
<p className="text-4xl poppins-bold text-newblue text-center">News About me</p><br></br>
      <p className='text-center dm-sans-400'>These are the news about me in various journals</p><br></br>
      
      <div className="relative flex flex-col mt-6 text-gray-700 shadow-xl bg-clip-border rounded-xl w-96 bg-newblack md:m-8">
  <div
    className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img className='w-full h-full'
      src={news}
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Seven nominee start-ups topped off Stanford Seed Spark programme
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    GAMERS TAG PRIVATE LIMITED Selected
for the Stanford Seed spark Cohort 06 Batch
    </p>
  </div>
  <div className="p-6 pt-0">
  <div className="flex justify-center">
  <img src={business} alt="business" className="w-90 h-16 p-2" />
</div>
  </div>


</div>  
</>
  )
}

export default News