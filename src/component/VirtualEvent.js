import React ,{useState} from 'react'

const VirtualEvent = () => {

    const virtualEvents = [
        { id: 1, title: "Resume Writing Workshop", date: "2024-10-01", time: "14:00", host: "Career Expert Jane" },
        { id: 2, title: "Tech Interview Prep", date: "2024-10-05", time: "10:00", host: "Senior Dev Mark" },
        { id: 3, title: "Networking in the Digital Age", date: "2024-10-10", time: "16:00", host: "LinkedIn Guru Sarah" },
      ]

    const [event,setEvent]=useState(virtualEvents);
    


  return (
    <>
    <div className='card card-body mt-3 text-start shadow-sm border-0 ' >
        <div className='text-start pb-3 pt-2'>
            <h4 className=' card-title'>Upcoming Virtual Events</h4> 
            <p className='lead fs-6'>Join our online workshops and webinars for career development</p>
        </div>
       
    </div>
   

   {
    event.map((arr,index)=>(
        
    <div className='card  card-body my-5 text-start ps-5 border border-primary'> 
    <div className='py-4 '>
       
        <h4 className='h5 text-capitalize pt-2'>{arr.title}</h4>
        <p className='lead fs-6'>Hosted by {arr.host}</p>
    </div>
    <div className='card-text pt-3 pb-4 '>
       <p className='fs-light h6'>Date:{arr.date}</p>
       <p className='fs-light h6'>Time:{arr.time}</p>
    <div className='pb-3 text-start  pt-4'>
       <button className='btn btn-primary px-3'>Register</button>
    </div>
</div>
</div>

    ))
   }



    </>

  )
}

export default VirtualEvent;