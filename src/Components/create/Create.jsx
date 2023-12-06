

import React, { useState } from 'react'
import clasess from './create.module.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Create = () => {

const [Title,setTitle]=useState("")
const [Description, setDescription]=useState("")
const [Categor, setCategory]=useState("")
const [Price, setPrice]= useState("")
const [Review, setReview]= useState("")


  const handlecreateProduct=()=>{



  }
  return (
    <div  className={clasess.container}>

      <div className={clasess.wrapper}>
<h2  className={clasess.title}>Create Food</h2>
<form  onSubmit={handlecreateProduct}   oncType="multipart/from-data">
<div className={clasess.inputwrapper}>

<label>Title:</label>
<input type="text"  placeholder="Product Title" 
 className={clasess.input}  onChange={(e)=>setTitle(e.target.value)}/>
</div>

<div className={clasess.inputwrapper}>

<label>Description:</label>
<input type="text"  placeholder="Product Description" 
 className={clasess.input}  onChange={(e)=>setTitle(e.target.value)}/>
</div>


<div className={clasess.inputwrapper}>

<label>Category:</label>
<input type="text"  placeholder="Product Description" 
 className={clasess.input}  onChange={(e)=>setCategory(e.target.value)}/>
</div>

<div className={clasess.inputwrapper}>

<label  for="html">Image:<span>Upload Image</span></label>
<input type="text"  id="image" placeholder="Product Images" 
 className={clasess.inputImage} 
 style={{display:'none'}}
 onChange={onChangeFile}/>
 {

  image && <p className={clasess.imageName}  >{image.name}
  <AiOutlineCloseCircle  onClick={handleImage} className={clasess.closeImg}/></p>
 }
</div>

<div className={clasess.inputwrapper}>

<label>Price:</label>
<input type="number" step={0.01}  placeholder="Product Price" 
 className={clasess.input}  onChange={(e)=>setPrice(e.target.value)}/>
</div>

<div className={clasess.inputwrapper}>

<label>Review:</label>
<input type="number" step={1}  min={1}  max={5} placeholder="Product Review" 
 className={clasess.input}  onChange={(e)=>setReview(e.target.value)}/>
</div>

</form>
      </div>
      
    </div>
  )
}

export default Create
