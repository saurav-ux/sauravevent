import React from 'react'
import EventItem from './EventItem'
import { Link } from 'react-router-dom';
function Home7(props) {
  return (
    <div className='container'>
         <p className='mainlike'>Likes Items</p>
         {/* <div className='like1a'>
          <img src="img1.jpeg" className='like1'></img> 
      </div> */}
      <div className='container'>
     {
       
        props.event1.length === 0 ? <><p>No Events Here </p> <Link className="nav-link" to="/homepage1"><button class="btn btn-primary col-md-2">Add Event</button></Link></>:
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

export default Home7
