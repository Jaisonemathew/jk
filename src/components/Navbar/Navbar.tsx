import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar poppins-regular  p-4">
      <div className="navbar-left">
        <a href="/">Personal Website</a>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
      <a href="#home" className='font-semibold'>Home</a>
      <a href="#my-journey" className='g-nav'>Journey</a>
       <a href="#skills" className='g-nav'>Skills</a>
        <a href="#testimonials" className='g-nav'>Testimonials</a>
        <a href="#my-journey" className='g-nav'>Education</a>
        <a href="#articles" className='g-nav'>Articles</a>
        <a href="#news" className='g-nav'>News</a>
        <a href="#contact" className='g-nav'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;