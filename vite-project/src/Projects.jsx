import React from 'react';
import {Link} from "react-router-dom";
import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../src/styles/Projects.css';

const Projects=()=>{
   Aos.init();
    return(
      <>
        <div className='project'>
          <div className='project-title'>
            <center>
<h1 className='p-5'>Projects</h1>
</center>
{/* <img src={project1} alt=''/> */}
          </div>
          <div className='project-container'>
            <div className='project-container-1'>
           <Link to='https://food-siteeee.netlify.app'>  <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"className='project1' src={project1}/></Link> 
            <h2 className='desc-1'>Urban Food - food ordering website</h2>
            </div>
            <div className='project-container-1'>
          <Link to='https://amanpreet1998-frontend.github.io/Portfolio'>   <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"className='project2' src={project2}/></Link>
            <h2 className='desc-2'>Portfolio</h2>
            </div>
          </div>
          </div>
        {/* <div data-aos="fade-up"
     data-aos-duration="3000">
<h1>Projects</h1><br/></div>
<div data-aos="zoom-in-down">
<p>I have built various different projects to fit different aspects of the client's business.<br/>
           If you want to see more examples of my work than the ones showcased in this site, please contact me!</p></div>
           <Link to="/project1">See Projects</Link> */}
</>
    )
}

export default Projects;
