


import React from 'react';
import clasess from './hero.module.css';
import manEatingImg from '../../assets/men1.jpg'
import {AiOutlineUser}  from 'react-icons/ai'
export const Hero = () => {
  return (
    <section  className={clasess.container} id="home"  >


< div className={clasess.wrapper}>

<div className={clasess.left}>
<h2 className={clasess.title}>  Do you crave delicious food</h2>

  <p  className={clasess.firstMag}>But Going to take <span>food cost Time...</span></p>
  <p  className={clasess.secondMag}>Why Not Order<span> Pazza</span>or something      <span>Or Something</span>from our restaurant</p>
<p className={clasess.desc}>Our restaurent always puts but client avobe</p>

<div className={clasess.buttons}>
  <button className={clasess.buttonorder}>Order Now</button>
  <button className={clasess.buttonsee}><a href="#foods" className={clasess.button}>See Whats <AiOutlineUser/>  </a></button>
</div>
</div>

<div className={clasess.right}>

  <img src={manEatingImg}      alt="" className={clasess.manEatingImg} />
</div>

</div>
    </section>
  )
}
