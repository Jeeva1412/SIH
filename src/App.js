
import './App.css';
import Home from './pagecomponent/Home';
import Progresspage from './pagecomponent/Progresspage';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './component/Login';
import Signup from './component/Signup';
import CommunitySupport from './pagecomponent/CommunitySupport';


import CoursesPage from './pagecomponent/Coursepage';
// In index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import SkillGap from './component/SkillGap';
import AboutUsPage from './component/AboutUsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdaptiveLearning from './component/AdaptiveLearning';
import Jobmarket from './component/Jobmarket';
import ResumeBuilder from './component/ResumeBuilder';
import PerformanceAnalysis from './component/PerfomanceAnalysis';







function App() {
  return (
    <div className="App">
      {/* <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/performace-analysis" element={<PerformanceAnalysis/>}></Route>
        <Route path="/skill-gap-analysis" element={<SkillGap/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/community-support" element={<CommunitySupport/>}></Route>
        <Route path="/about-us" element={<AboutUsPage/>}></Route>
        <Route path="/courses" element={<CoursesPage/>}></Route>
        <Route path="/adaptive-learning" element={<AdaptiveLearning/>}></Route>
        <Route path="/job-market" element={<Jobmarket/>}></Route>
        <Route path="/resume-wizard" element={<ResumeBuilder/>}></Route>
  
        
      </Routes>
    </BrowserRouter>


      
    </div>
  );
}

export default App;
