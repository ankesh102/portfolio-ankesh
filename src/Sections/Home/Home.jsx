import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <section id='home' className='home_section'>

    <p className='home_greet'>
        Hi, My Name is 
    </p>

    <h1 className='home_heading_1'>
        Ankesh k Pandey
    </h1>

    <h1 className='home_heading_2'>
        I build things for the web.
    </h1>

    <p className='home_desc'>
    I'm pursuing B.Tech in Computer Science from Lovely
     Professional University, Punjab. I love to learn new stuffs,
      and I'm working day by day on improving my skills. I'm highly 
      interested in learning Software Development tools 
    and technique as well as Full Stack Web Development.

        
    </p>

    <a href='https://github.com/ankesh102' >
        <button className='home_btn' >Check out my Work !</button>
    </a>
      
    </section>
  )
}

export default Home
