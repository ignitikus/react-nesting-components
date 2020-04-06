import React from 'react'
import faker from 'faker'
import Square from './Square'

export default function Body() {
   return (
      <div 
         style={{
            gridArea:'body',
            backgroundColor:'teal'
         }} 
         className='bodyDiv'
      >
         <div style={{
            gridArea: 'img'
         }}>
            <img src={faker.image.image()} alt="" style={{
               maxWidth: '300px'
            }}/>
         </div>
         <div style={{
            gridArea: 'text',
            textAlign: 'justify'
         }}><h3>{faker.lorem.paragraphs()}</h3></div>
         <Square number='1' image={faker.image.animals()}/>
         <Square number='2' image={faker.image.fashion()}/>
         <Square number='3' image={faker.image.city()}/>
         <Square number='4' image={faker.image.abstract()}/>

      </div>
   )
}
