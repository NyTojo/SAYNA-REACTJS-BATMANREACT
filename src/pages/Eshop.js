import React, { useState } from 'react';
import HeroShop from '../components/heroShop';
import ProductList from '../components/ProductList';
import Products from '../data/Products';


function Eshop() {
  const [data, setData] = useState(Products);

  return (
    <>
      <HeroShop />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Filter by category</h5>
            {/* Ajoutez ici vos filtres de catégorie */}
          </div>
          <div className="col-md-9">
            <ProductList />
            <div className="row">
              {data.map((values) => {
                const { id, title, price, imageUrl, description } = values;
                return (
                  <div className="col-md-4" key={id}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <img src={imageUrl} className="card-img-top" alt="" />
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>{price}</p>
                        <a href="#" className="btn btn-primary">
                          Ajouter au panier
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eshop;
