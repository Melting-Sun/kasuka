import React from 'react'
import './Product.css'



function Product() {
    return (
        <div className='product-container'>
            <div>
                <p>Veniam</p>
                <h2>Qui esse commodo commodo dolor.</h2>
            </div>

            <div className='product-ul'>
                <ul>
                    <li><button class="orange-bg">all</button></li>
                    <li><button>subzero</button></li>
                    <li><button>scorpion</button></li>
                    <li><button>lalo</button></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Product