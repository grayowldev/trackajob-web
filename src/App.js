import logo from './logo.svg';
import Home from './pages/Home';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import JTable from './components/JTable';
import Button from './components/buttons/Button';
import Form from './components/form/Form';
import Popup from './components/Popup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import JobService from './services/jobService';
import api from './services/api';
import JobCard from './components/cards/JobCard';
import { Card } from '@mui/material';
import { ClassNames } from '@emotion/react';
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  const [jobs, setJobs] = useState([])
  const func = () => console.log("function was called")

  useEffect( () => {
    const fetchJobs = async () => {
        try {
            const respose = await api.get('/job/');
            console.log(respose);
            setJobs(respose.data);
        } catch (err) {
          if (err.respose) {
            console.log(err.respose.data);
            console.log(err.respose.status);
            console.log(err.respose.headers);
          } else {
            console.log(err);
          }
            
        }
    }
    fetchJobs();
}, [])
 

//   const jobs = [
   
//       {
//         "company": "Smiths",
//         "jobId": "123443"
//       },
//       {
//         "company": "HCV",
//         "jobId": "124334"} 
    
// ]
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home jobs={jobs}/>} />
        </Routes>
      </Router>
      <Navbar />
      <div>
        <Button text="Add a job" onClick={func}/>
      </div>
      <div>
        <JTable jobs={jobs}/>
      </div>
      <Popup trigger={true}/>
      {jobs.map((job) => (
        // <JCard job="job"></JCard>
        <div></div>
      ))}
      
      {/* <Card /> */}
    </div>
  ); 
}

// const JCard = styled.div`
//   margin: 0 auto`;
export default App;
