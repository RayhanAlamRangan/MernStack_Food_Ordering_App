
'use client';
import React from 'react';
import clasess from './foods.module.css';
import { Link } from 'react-router-dom';


import { foodTypes } from '../../data/data';
const Foods = () => {
  return (
    <section  id="foods"  className={clasess.container}>
        <div className={clasess.wrapper}>

      <h4 className={clasess.subTitle}>Whats We Offer</h4>

        <h2 className={clasess.title}>Best Male In The City</h2>

          <div className={clasess.foods}>

          

          {



foodTypes.map((foodType)=>{


return   <Link to={`/foods/${foodType.id}`  }  key={foodType.id} className={clasess.food}>

<h4>{foodType.name}</h4>
<div  className={clasess.imgcontainer}>

<img src={foodType.img}  alt="amg"  className={clasess.images}   />
</div>
  </Link>


}

)
          }

     
      

      </div>

</div>
   
    </section>
  )
}

export default Foods;
