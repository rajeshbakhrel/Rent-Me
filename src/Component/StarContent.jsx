import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import {TbStarHalfFilled} from "react-icons/tb"
import "../Style/SingleProduct.css"

const StarContent = ({star}) => {

        const ratingStar = Array.from({length:5},(elem,index)=>{
                    let number= index+0.5
                    // console.log(index)
                    // console.log(stars)
        

  return (
    <div key={index}>
        {
            star >= index+1 ?(
            <AiFillStar className='single-product-star'/>
            ): 
            star >= number ?(
            <TbStarHalfFilled className='single-product-star'/>
            ):
            (< AiOutlineStar   className='single-product-star'/>
            )
        }


    </div>
  )
})

return(
    <>
    {ratingStar}
    </>

    
)

}

export default StarContent