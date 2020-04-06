import React from 'react'

export default function Footer(props) {
   return (
      <div 
         style={{
            backgroundColor:'green', 
            gridArea: 'footer',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            minHeight: '50px'
            }}>
               <h3> Copyright © {props.year} Niko Studio</h3>
      </div>
   )
}
