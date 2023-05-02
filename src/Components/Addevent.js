import React, { useState } from 'react'

function Addevent(props) {
    // const [ename,setEname] = useState("");
    const [userEvent,setUserEvent] = useState({
        eventname : "",
        location : "",
        date: "",
        time: ""
    })
   
    const handleinput = (e)=>{     
       const val = e.target.value
    //     // console.log(val);
       const nam = e.target.name;
    //     console.log(nam);
    setUserEvent({...userEvent,[nam]:val})
    }
    function submit(e){
        e.preventDefault()
        // console.log(userEvent.time)
        props.addEventt(userEvent.eventname,userEvent.location,userEvent.date,userEvent.time)
        setUserEvent({eventname : "",
        location : "",
        date: "",
        time: ""})
        // setEname("")
    }
  return (
    <div className='container'>
       <p className='mainlike'>Add Events</p>
       <form className="row g-2" onSubmit={submit}>
            <div class="mb-3 col-md-6">
              <label htmlfor="eventName" class="form-label">Event Name</label>
              <input type="name" class="form-control" id="eventName" value={userEvent.eventname} onChange={handleinput} name='eventname' required/>  
            </div>
            <div class="mb-3 col-md-6">
              <label htmlfor="location" class="form-label">Location</label>
              <input type="name" class="form-control" id="location" value={userEvent.location} onChange={handleinput} name='location' required/>  
            </div>
            <div class="mb-3 col-md-6">
              <label htmlfor="location" class="form-label">Date</label>
              <input type="date" class="form-control" id="date" value={userEvent.date} onChange={handleinput} name='date' required/>  
            </div>
            <div class="mb-3 col-md-6">
              <label htmlfor="location" class="form-label">Time</label>
              <input type="time" class="form-control" id="time" value={userEvent.time} onChange={handleinput} name='time' required/>  
            </div>
           
            <button type="submit" class="btn btn-primary col-md-2">Submit</button>
      </form>
    </div>
  )
}

export default Addevent
