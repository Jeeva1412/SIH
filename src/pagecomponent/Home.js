import React from 'react'
import '../styles/Home.css'
import Header from '../component/Header';
import ServicesDropdown from '../component/ServicesDropdown';
import Overview from '../component/Overview_body';
import Overview_2 from '../component/Overview_body_2';
import Overview_3 from '../component/Overview_body_3';
import Footer from '../component/Overview_footer';


function Home(){
    return (
        <>
        <Header/>
       
        <Overview/>
        <Overview_2/>
        <Overview_3/>
        <Footer/>
        </>
    );
}
export default Home;