import {useState} from 'react';
export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    let [click,setclick]=useState(0);

  let toggleLike=()=>{
  //  console.log("we are going to toggle")
   setIsLiked(!isLiked);
   setclick(click+1);
   
  };

  let likeStyle = {color:"red"}

    return(
        <div>
            <p>Click={click}</p>
            <p onClick={toggleLike}>
                    {isLiked ? (
                         <i className="fa-solid fa-heart" style={likeStyle}></i>
                    ):(
                        <i className="fa-regular fa-heart"></i>  
                    )}
           
            </p>
         
        </div>
    );
}
