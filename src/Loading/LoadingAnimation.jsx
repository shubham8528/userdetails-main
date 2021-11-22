import './LoadingAnimation.css'
import { useHistory } from "react-router"
   import React from 'react'
   
   export default function LoadingAnimation() {
    let a = useHistory()
    setTimeout(function(){  a.push('/home') }, 4000);
       return (
           <div className='logerbody'>
               <div class="loader">Please Wait...</div>
           </div>
        
               
           
       )
   }
   
 