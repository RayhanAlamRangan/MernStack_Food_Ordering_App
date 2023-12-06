

import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom';
import {AiFillAmazonCircle} from 'react-icons/ai';
import { AiOutlineUser} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {

    const   [isScroll,setIsscroll]=useState(false);

    window.onscroll=()=>{
setIsscroll(window.pageYoffset=== 0 ? false  :true )

return ()=>(window.onscroll =null)
    }
  return (
    <div className={`${classes.container} ${isScroll && classes.scrolled}`}>
        <div className={classes.wrapper}>
            <div className={classes.left}>
                <Link to="/"    className={classes.title}>RayhanRestaurant</Link>
            </div>
            <div className={classes.center}>
                <ul className={classes.list}>
                    <li  className={classes.listItem}>
                        <a href="#home">Home</a>
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li  className={classes.listItem}>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li  className={classes.listItem}>
                        <a href="#foods">Foods</a>
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li  className={classes.listItem}>
                        <a href="#faq">FAQ</a>
                    </li>
                </ul>

                <ul className={classes.list}>
                    <li  className={classes.listItem}>
                        <a href="/create">Create</a>
                    </li>
                </ul>
            </div>
            <div className={classes.right}>


            <AiOutlineUser  className={classes.usericon}/>
                <Link to="/cart"     className={classes.cartContainer}>
                <AiFillAmazonCircle  className={classes.cartIcon}/>
                    <div className={classes.cartQuantity}>0

                    </div>



                </Link>
                <button  className={classes.logout}>Log Out</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
