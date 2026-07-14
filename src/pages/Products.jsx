import React, { useState } from 'react';
import { useEffect } from 'react';

const Products = () => {
    const [count , setCount] = useState(0)
    const [name , setName ] = useState("jithin")
    
    useEffect(()=>{
        // console.log("component mounted");
        // alert('component mounted')
        // console.log("Runs once");
        let countvalue = 0
        let timer = setInterval(()=>{
            countvalue += 1
            console.log(countvalue)
        } ,1000)

        // cleanup function 
        return ()=>{
           clearInterval(countvalue)
        }

    } , [])


  return (
    <div>
        <h1>Product lists</h1> <hr />

        <h1>count {count} </h1>
        <h1>Name : {name} </h1>
        <button onClick={()=> setCount((pcount)=>pcount + 1)}>increament</button>
        <button onClick={()=> setName("john")}>change name </button>

    </div>
  );
}

export default Products;
