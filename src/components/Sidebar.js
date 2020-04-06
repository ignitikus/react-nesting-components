import React from 'react'
import faker from 'faker'

export default function Sidebar() {
   return (
      <div style={{
         gridArea:'side',
         backgroundColor: 'purple',
         display:'flex',
         alignItems:'center'
      }}>
         <ul style={{
            listStyleType: 'none'
         }}>
            <li><h3>Pizza</h3></li><br/>
            <li><h3>Steak</h3></li><br/>
            <li><h3>Tiramisu</h3></li><br/>
            <li><h3>Tacos</h3></li><br/>
         </ul>
      </div>
   )
}
