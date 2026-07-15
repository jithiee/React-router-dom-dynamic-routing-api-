import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main'>
          {/* ====== Link and a tag ===========*/}
        {/* <ul>
            <li> <Link to="/" style={{color:'white' , textDecoration: 'none'}} >Home</Link> </li>
            <li> <Link to="/about"  style={{color:'white' , textDecoration: 'none'}} >About react</Link> </li>
           
            <a href="/about" style={{color:'white' , textDecoration:'none'}}>About html</a>
           
            <li> <Link to="/contact"  style={{color:'white' , textDecoration: 'none'}}>Contact</Link> </li>
        </ul> */}
    
        {/* ======= NavLink =======  */}
        
       <ul> 
            <li>  <NavLink to="/" style={({isActive})=>({
              color: isActive ? "burlywood" :'white' ,
              textDecoration:'none', 
              backgroundColor: isActive ? "blue" : "" , 
              padding : isActive ? "5px" : "",
              border : isActive ? "1px solid green" : "" ,
              borderRadius : isActive ? "5px": "",
              })  }  
              >Home</NavLink>  </li>

            <li>  <NavLink to="/about" style={({isActive})=>({
              color: isActive ? "burlywood" :'white' ,
              textDecoration:'none', 
              backgroundColor: isActive ? "blue" : "" , 
              padding : isActive ? "5px" : "",
              border : isActive ? "1px solid green" : "" ,
              borderRadius : isActive ? "5px": "",
              })  }   >About</NavLink>  </li>
            <li>  <NavLink to="/contact" style={({isActive})=>({
              color: isActive ? "burlywood" :'white' ,
              textDecoration:'none', 
              backgroundColor: isActive ? "blue" : "" , 
              padding : isActive ? "5px" : "",
              border : isActive ? "1px solid green" : "" ,
              borderRadius : isActive ? "5px": "",
              })  }  >Contact</NavLink>  </li>

               <li>  <NavLink to="/products" style={({isActive})=>({
              color: isActive ? "burlywood" :'white' ,
              textDecoration:'none', 
              backgroundColor: isActive ? "blue" : "" , 
              padding : isActive ? "5px" : "",
              border : isActive ? "1px solid green" : "" ,
              borderRadius : isActive ? "5px": "",
              })  }  >Products</NavLink>  </li>
              
               <li>  <NavLink to="/apiproducts" style={({isActive})=>({
              color: isActive ? "burlywood" :'white' ,
              textDecoration:'none', 
              backgroundColor: isActive ? "blue" : "" , 
              padding : isActive ? "5px" : "",
              border : isActive ? "1px solid green" : "" ,
              borderRadius : isActive ? "5px": "",
              })  }  >API Products</NavLink>  </li>
            


       </ul>

    </div>
  );
}
export default Navbar;
