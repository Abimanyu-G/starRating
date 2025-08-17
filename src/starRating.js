import React, { useState } from "react";
import {FaStar} from "react-icons/fa"
function StarRating(){

    
    const[rating, setRating] = useState(null);
    const [hover, setHover] = useState(null); 
    
     return(
        <div>
            {[...Array(5)].map((star, i) =>{
                const ratingValue = i +1;
                return( 
                <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={()=>setRating(ratingValue)} style={{display:"none"}}/>
                    <FaStar className="star" color={ratingValue <= (hover || rating) ? "gold" : "gray"} size={30} onMouseEnter={() => setHover(ratingValue)}
                     onMouseLeave={() => setHover(null)} />
                    </label>
                    
                );
                
            })}
           
        </div>
     );
}

export default StarRating
