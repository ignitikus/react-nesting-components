import React from 'react'


export default function SingleFeed(props) {
   return (
      <div>
         <div className='ui feed'>
            <div className="event">
               <div className="label">
                  <img src={props.image} alt="..."/>
               </div>
               <div className="content">
                  <div className="date">{props.time}</div>
                  <div className="summary">
                     <a href="#" className='user'>{props.name}</a> {props.message}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
