import React from 'react'
import products from './productList.json'
import './Cards.css'

export default function Cards() {
  return <div className="container cards-container">
            <div className="row">
                {products.map(product=> {
                    return <div className="col-sm-3">
                        <div className="card">
                            <img className="card-img-top" src={product.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-center">{product.title}</h5>
                                <p className="card-text text-center">{product.description}</p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <a href="#" className="btn btn-primary">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
    </div>
}
