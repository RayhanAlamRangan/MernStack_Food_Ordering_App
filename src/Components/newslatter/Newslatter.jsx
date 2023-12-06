


import React from 'react'

import clasess   from './newslatter.module.css';
import {AiOutlineSend}  from 'react-icons/ai';
import newslatterIllustration from '../../assets/get-newsletter-updates.svg';
const Newslatter = () => {
  return (
<section  id="contact"   className={clasess.container}>


<div className={clasess.wrapper} >
        <h4  className={clasess.subTitle}>Get Our Newslatter is so far so could so height</h4>
        <h2 className={clasess.title}>Newslatter</h2>
        <div className={clasess.inputcontainer}>
        <input type="text" placeholder="Enter Your Address..."/>
        <AiOutlineSend   className={clasess.sendIcon}/>




        </div>

<img src={newslatterIllustration}  className={clasess.illustration}     alt="img" />

    </div>
</section>
  )
}

export default Newslatter
