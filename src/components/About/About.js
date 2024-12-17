import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';
import './About.css';

const About = () => {
  const handleDownload = ()=>{
    const filUrl = 'documents/Resume-document.pdf';
    const anchor = document.createElement('a');
    anchor.href=filUrl;
    anchor.download='Resume-document.pdf';
    anchor.click();
  };
  return (
    <>
      <div className='container1'>
        <div className='full-content'>
          <motion.div
            variants={fadeIn('right', 0.3)} // Move in from left
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className='about'
          >
            <div className='heading'>ABOUT ME</div>
            <div className='mainhead'>
              Turning Lines of Code <br /> into Digital Masterpieces
            </div>
            <button className='dwnload' onClick={handleDownload}>
              DOWNLOAD CV <i className='fa-solid fa-download'></i>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}div className='descr'>
          I specialize in creating dynamic, user-friendly websites that combine clean code with innovative design. With a strong focus on performance and functionality, I strive to deliver seamless digital experiences that leave a lasting impression. From responsive designs to scalable web solutions, I am dedicated to turning your vision into a reality through the power of code and creativity.
        </motion.div>
        </div>
        
      </div>
    </>
  );
};

export default About;
