import React from 'react'
import {useState} from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';
import './Projects.css'
import blog from '../../assets/images/djangoblog.jpg';
import social from '../../assets/images/social-media.jpg';
import doubts from '../../assets/images/doubts.jpg'
import ecommerce from '../../assets/images/Eccomerce-Illustrations.png'
import todo from '../../assets/images/todoapp.jpg'
import tourism from '../../assets/images/tourism.jpg'
import weather from '../../assets/images/weather.jpg'
import whatsapp from '../../assets/images/what.jpg'


const Projects =()=> {
  
    const projects=[
      {id:1,name:'College Blog',git:'https://github.com/Vysakh-B/College-Blog',type:'website',image:blog},
      {id:2,name:'Socialmedia',git:'',type:'website',image:social},
      {id:3,name:'E-commerce',git:'https://github.com/Vysakh-B/E-Commerce',type:'website',image:ecommerce},
      {id:4,name:'To-Do App',git:'',type:'mobileapp',image:todo},
      {id:5,name:'Weather App',git:'https://github.com/Vysakh-B/web/tree/main/weather%20api',type:'webapp',image:weather},
      {id:6,name:'Whasapp UI',git:'',type:'mobileapp',image:whatsapp},
      {id:7,name:'QueryMinds',git:'https://github.com/Vysakh-B/QueryMinds',type:'website',image:doubts},
      {id:8,name:'Tourism',git:'https://github.com/Vysakh-B/tourism',type:'website',image:tourism}
    ];
    const [filter,setFilter]=useState('All');
    const getFilteredProjects=()=>{
      if(filter === 'All'){
        return projects;
      }
      return projects.filter((project)=>project.type === filter);
    }
    const filteredProjects=getFilteredProjects()
    return (
      <div className='container2'>
      <div className='heading1'>My Projects</div>
      <motion.div
                  variants={fadeIn('left', 0.3)} // Move in from left
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }} className='buttons'>
        <button onClick={()=>setFilter('website')}>Websites</button>
        <button onClick={()=>setFilter('webapp')}>Web App</button>
        <button onClick={()=>setFilter('mobileapp')}>Mobile App</button>
      </motion.div>
      <div className='cards'>
          {filteredProjects.map((project)=>(<motion.div
                      key={project.id}
                      variants={fadeIn('right', 0.3)} // Move in from left
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.7 }} className='card' style={{
    backgroundImage: `url(${project.image})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'
  }}><div className='hovr'><a href={project.git} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>{project.name}</a></div></motion.div>))}
          
      </div>
      </div>
    )
  }
export default Projects;
