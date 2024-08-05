
import Paper from './components/Paper/Paper'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import News from './components/News/News'
import Skills from './components/Skills/Skills'
import Form from './components/Form/Form'
import Testimonials from './components/Testimonials/Testimonials'
import EducationJourney from './components/Educational_journey/Education_career';
import ArticlesAndBlogs from './components/Articles&Blogs/Articles&Blogs';
import MyFeedsAndPosts from './components/MyFeeds&post/MyFeeds&post';
import Gallery from './components/Gallery/Gallery'
import './App.css'

function App() {
  

  return (
    <> 
   <Navbar/>
   <Hero/>
   <EducationJourney/>
   <Skills/>
   <ArticlesAndBlogs/>
   <Testimonials/>
   <MyFeedsAndPosts/>
   <Paper/>
   <News/>
   <Gallery/>
   <Form/>
   <footer className=' text-nwhite text-center p-4'>
     <p>© 2024 All rights reserved</p>    
     <p>Haniya Abdul Rahaman | Jaison E Mathew | Lokesh Suwalka</p>    
    </footer>
    </>
  )
}

export default App
