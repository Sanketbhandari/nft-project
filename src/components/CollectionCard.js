import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'

function CollectionCard({id, name, traits, image}) {
  return (
    <div className='CollectionCard'>
        <img src={image} />
        <div className='details'>
            <div className='name'>
                {name} <div className='id'>#{parseInt(id)+1}
                </div>   
            </div>
            <div className='priceContainer'>
                <img src={weth} className='wethImage'></img> 
            <div className='price'>{traits[0]?.value}</div>   
            </div>
        </div>
    </div>
  )
}

export default CollectionCard