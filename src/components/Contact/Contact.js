import React, { Component } from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div className='container5'>
        <motion.div
          variants={fadeIn('left', 0.3)} // Move in from left
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }} className='headset'>Contact Me</motion.div>
        <motion.div
          variants={fadeIn('right', 0.3)} // Move in from left
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }} className='MailBox'>
          <form>
            <input type='email' placeholder='Your Email id...' className='emails'></input>
            <textarea type='text' placeholder='Content' className='contents'></textarea>
            <button type='' style={{marginTop:'20px'}}>SUBMIT <i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </motion.div>
      </div>
    )
  }
}
