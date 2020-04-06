import React from 'react'

export default function Square(props) {
   return (
      <div className='squares' style={{
            gridArea: `sq${props.number}`,
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover'
         }}>
            <h3 style={{
               color:'white',
               textShadow: '-1px 1px 0 #000',
            }}>Square {props.number}</h3>
      </div>
   )
}
