import React from 'react'
import EventItem from './EventItem'
function Saveevent(props) {
  return (
    <div className='container'>
         <p className='mainlike'>Likes</p>
         {/* <div className='like1a'>
          <img src="img1.jpeg" className='like1'></img> 
      </div> */}
      <div className='container'>
     {
       
        props.event1.length === 0 ? "Please add Event":
        props.event1.map((item)=>{
             return(
                <>             
                  <EventItem item1 ={item}  key ={item.sno}/>
                </>
             )
        })
     }
     </div>
    </div>
  )
}

export default Saveevent
