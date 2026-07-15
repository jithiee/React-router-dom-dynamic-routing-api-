import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate=()=>{
      setTimeout(()=>{
          navigate("/apiproducts")  
      },1000)
  }

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleNavigate}>go product page</button>
    </div>
  );
}

export default Home;



