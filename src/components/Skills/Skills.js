import React, { Component } from 'react'
import './Skills.css'
import {Line} from 'rc-progress'
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';
// import { progress } from 'framer-motion'

export default class Skills extends Component {
  render() {
    const data=[
      {name:'HTML',percen:90},
        {name:'CSS',percen:80},
        {name:'JAVASCRIPT',percen:70},
        {name:'DJANGO',percen:90},
        {name:'ANDROID',percen:50},
        {name:'REACT',percen:70},
    ]
    return (
      <div className='container3'>
        <motion.div
              variants={fadeIn('left', 0.3)} // Move in from left
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }} className='skillhead'>My Skills</motion.div>
        <motion.div
              variants={fadeIn('right', 0.3)} // Move in from left
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }} className='skilldesc'> The Skills that i build during my Education</motion.div>
        <div className='skillset'>
          <div className='rowm1'>
          {data.map((item, index) => (
            <motion.div
              variants={fadeIn('left', 0.3)} // Move in from left
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }} className="timelines" key={index}>
              <div className="nme">{item.name}</div>
              <div className="line">
              <Line
              percent={item.percen} // Use item.percen here
              strokeWidth={2} // Updated for better visibility
              strokeColor="rgb(59, 118, 59)"
              trailWidth={2}
              trailColor="rgb(200, 200, 200)" // Better contrast for the trail
              strokeLinecap="round"
              />
              </div>
            </motion.div>
          ))}    
          </div> 
        </div>
      </div>
)
}
}
