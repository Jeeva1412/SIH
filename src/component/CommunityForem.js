import React,{useState} from 'react'


const CommunityForem = () => {

    

    const initialPosts = [
        {  author: "Alice Johnson", content: "Has anyone taken the 'Advanced JavaScript' course on Udemy? I'm considering it for upskilling.", likes: 5, replies: 2 },
        {  author: "Bob Smith", content: "I'm struggling with my job search. Any tips for standing out in a competitive market?", likes: 8, replies: 4 },
        {  author: "Charlie Brown", content: "Just completed a great data science project! Happy to share my experience if anyone's interested.", likes: 12, replies: 6 },
      ]

    const [post,setPost]=useState(initialPosts);
    const [newpost,setNewpost]=useState('')

    function texthandler(e){
        setNewpost(e.target.value);
      
    }   
    function addpost(){
      setPost((prev)=>[...prev,{
        author:"current user",
        content:newpost
      }]);
      setNewpost("");
      
    }

  return (
    <>
    <div className='card card-body mt-3 mx-3 shadow-sm border-0 ' >
        <div className='text-start pb-4 pt-2'>
            <h4 className=' card-title'>Community Forum</h4> 
            <p className='lead fs-6'>Connect with peers, ask questions, and share experiences</p>
        </div>
        <div className='text-start '>
            <textarea className='form-control p-3' placeholder='Share Your Thoughts or ask questions...' onChange={texthandler} value={newpost}></textarea>
            <button className='btn btn-primary mt-2 'onClick={addpost}>Post</button>
        </div>

    </div>
   


    {
        post.map((obj,index)=>(
            <div className='card my-5 card-body mx-5 border-primary' key={index}>
            <div className='d-flex gap-3 py-4 ps-4'>
                <img className='default  flex-start' src="/images/default-profile.webp" />
                <h4 className='h5 text-capitalize pt-2'>{obj.author}</h4>
            </div>
            <div className='card-text pt-3 pb-4'>
                <p className='fw-normal'>{obj.content}</p>
            </div>
            <div className='pb-4 text-start ps-4 d-flex gap-5'>
                <small>{obj.likes}  likes</small>
                <small>{obj.replies}  replies</small>
            </div>
        </div>
        ))
    }


    </>

  )
}

export default CommunityForem