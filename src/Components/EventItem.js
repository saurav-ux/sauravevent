import React, { useState } from 'react'

function EventItem({item1}) {
    // like dislike function
   const [like,setLike] = useState(false)
   function handleClick(){
    setLike(prev=>!prev)
}

  return (
    <div className='con'>
    <div className='like'>
      <div className='likeA'>
      <img src={item1.getimg}  className='like1'></img> 
      </div>
      <div className='like2'>
        <p><b>{item1.eventname}</b></p>
        <p>{item1.date} {item1.time} IST</p>
      </div>
      <div className='like3'>
      <p onClick={handleClick} className={like ? "red" :"black"}><i class="fa-solid fa-heart" ></i></p>
      </div>
    </div>
    </div>
  )
}

export default EventItem
