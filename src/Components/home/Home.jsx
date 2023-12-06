

import React from 'react'

import { Hero } from '../hero/Hero';
import clasess from  './home.module.css';


import Foods from '../food/Foods';

import img from '../../assets/rem2.jpg';
import img1 from '../../assets/men1.jpg';
import img2 from '../../assets/rem.jpg';
import Newslatter from '../newslatter/Newslatter';




const Home = () =>  {
  return (
    <div  className={clasess.container}  >

     
      <div   className={clasess.wrapper}>
       
      <Hero/>
      <div className={clasess.delivery}>
        <div className={clasess.titles}>
          <span className={clasess.deliverySubtitle}> Delivery</span>
          <h2 className={clasess.deliveryTitle}>Always On Time For You</h2>
        </div>

      


        <div className={clasess.deliveryInfos}>
        <div className={clasess.deliveryInfo}>
          <img src={img}  alt=""  className={clasess.firstImg}/>
          <h3>Our Delivery guys is Always ob Time</h3>
        </div>

       </div>



       <div className={clasess.deliveryInfos}>
        <div className={clasess.deliveryInfo}>
          <img src={img1}  alt=""  className={clasess.secondImg}/>
          <h3>He Works Very Hard</h3>
        </div>
        </div>



        <div className={clasess.deliveryInfos}>
        <div className={clasess.deliveryInfo}>
          <img src={img2}  alt=""  className={clasess.thirdImg}/>
          <h3>He is Friendly and Social</h3>
        </div>

       </div>



        </div>

<Foods/>
<Newslatter/>



   
      </div>

      </div>
   
  );
}

export default Home;
