import React from 'react'
import '../styles/HeroShop.css';

const HeroShop = ({titre,name,age})=> {
  //const titre = props.titre;
  //const name = props.name;
  return (
   <section id='hero'>
      <div className='heroImage'>
        <div className='container'>
           <h1 className='hero-title'>Recuperez le flow de <br/>batman avec notre e-shop</h1>
        </div>
      </div>
   </section>
  );
}
 
export default HeroShop;