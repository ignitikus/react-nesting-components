import React from 'react'

export default function Header() {
   return (
      <div style={{
         gridArea: 'header',
         backgroundColor: 'lightBlue', 
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         minHeight: '50px'
         }}>
         <h1>React-Intro Homework</h1>
      </div>
   )
}
