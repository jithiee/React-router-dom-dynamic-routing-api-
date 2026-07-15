import React, { useState , useEffect } from 'react';

const ApiProducts = () => {

 const [data , setData ] = useState([])
 
// useEffect(()=>{
//     // promise for api fetching 
//     fetch("https://dummyjson.com/products")
//     .then((response )=> response.json())
//     .then((result)=>setData(result.products))
// }, [])

useEffect(()=>{
    // async await with fetching api
  const fetchData = async()=>{
     const response = await fetch("https://dummyjson.com/products")
     const datas = await response.json()
     setData(datas.products)
  }
  fetchData()
},[])


  return (
    <div>
      <h1>Api Products List</h1>

     <div>
        {data.map((item)=>(
           <div key={item.id}>
                 <p>product id : {item.id}</p>
                <p>Title : {item.title}</p>
                <p>description : {item.description}</p>
                <button>view details</button>
                
                <hr />
           </div>
        ))}
     </div>

    </div>
  );
}

export default ApiProducts;
