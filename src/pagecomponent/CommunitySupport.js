import React from 'react'
import styles from '../styles/CommunitySupport.module.css'
import {useState} from 'react'
import CommunityForem from '../component/CommunityForem';
import VirtualEvent from '../component/VirtualEvent';
import Header from '../component/Header';

const CommunitySupport = () => {

    const [btnclass,setBtnclass] = useState('button-1');
    const [forum,setForum]=useState('community-forum');

    function activatebtn(clsname,forumname){
        setBtnclass(clsname);
        setForum(forumname);
    }

  return (
    <>
    <Header/>
    <div className='container mt-5  p-3'>
        <h2 className='text-start'>community & Peer Support</h2>
        <div className={`row row-cols-2 mt-4 ${styles.btnColorLight} p-3 rounded-3 bg-primary`}>
            <div className='col-6'>
                <button className={`btn ${btnclass === 'button-1' ? 'btn-light':styles.btnColorLight} w-100 `} onClick={()=>activatebtn('button-1','community-forum') }>community forem</button>
            </div>
            <div className='col-6'>
            <button className={`btn ${btnclass=== 'button-2'? 'btn-light':styles.btnColorLight} w-100 `} onClick={()=>activatebtn('button-2','virtual-event')}>virtual events</button> 
            </div>
          
        </div>
        {
            forum === 'community-forum' ? <CommunityForem/> :<VirtualEvent/>
        }
    </div>
    </>
  )
}

export default CommunitySupport