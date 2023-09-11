'use client'
import React from 'react';


const Subscribe = () => {
    return (
        <div>
        <h4 className="text-yellow-300 font-semibold text-xl">Join a Newsletter</h4>
        <form >
         <div className="relative">
         <input className="py-3 px-2 rounded-l-md w-full" placeholder="Your Email" type="text" />
          <button className="bg-yellow-500 text-white px-3 py-3 rounded-r-md font-semibold absolute bottom-0 -right-1">Subscribe</button>
         </div>
        
        </form>

   
      </div>
    );
};

export default Subscribe;