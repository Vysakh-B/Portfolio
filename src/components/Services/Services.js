import React, { Component } from 'react'
import './Services.css'
import developerImg from '../../assets/images/developer.jpeg';
import designImg from '../../assets/images/designing.jpg';
import appImg from '../../assets/images/app.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';

export default class Services extends Component {
  render() {
    return (
      <div className='container4'>
        <div className='heads'>Services</div>
        <div className='set'>
          <motion.div
            variants={fadeIn('left', 0.3)} // Move in from left
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }} className='grp'><div className='service' style={{backgroundImage: `url(${developerImg})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}></div><div className='namesd'>WEB DEVELOPMENT</div></motion.div>
          <motion.div
            variants={fadeIn('down', 0.3)} // Move in from left
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }} className='grp'><div className='service' style={{backgroundImage: `url(${designImg})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}></div><div className='namesd'>WEB DESIGNING</div></motion.div>
          <motion.div
            variants={fadeIn('right', 0.3)} // Move in from left
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }} className='grp'><div className='service' style={{backgroundImage: `url(${appImg})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}></div><div className='namesd'>APP DEVELOPMENT</div></motion.div>
        </div>
      </div>
    )
  }
}
