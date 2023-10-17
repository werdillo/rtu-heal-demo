import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../assets/scss/_workflow.scss';
import Graph from '../components/Graph';
import LogOutput from '../components/LogOutput';
import Result from '../components/Result';
import ChooseFile from '../components/modals/ChooseFile';
import Warning from '../components/modals/Warning';
import { TiDelete } from "react-icons/ti";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function WorkFlow() {
  const navigate = useNavigate();


  const [inProcess, setInProcess] = useState(false);
  
  // modals

  const [startWarning, setStartWarning] = useState(false);
  const [stopWarning, setStopWarning] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState(false);

  return (
    <div className='workflow'>

      <div className='-workflow-nav'>
          <div className='-exit'>
            <Link to='/'><IoArrowBackCircleSharp size={34}/></Link>
            <div>in process</div>
          </div>
          <div className='-workflow-name'>Workflow 1</div>
          <div className='-buttons'>
            {!inProcess && <button className='-btn green' onClick={() => setStartWarning(true)}>start</button>}
            {inProcess && <button className='-btn red' onClick={() => setStopWarning(true)}>Stop</button> }
             <button disabled={inProcess} onClick={() => setDeleteWarning(true)}><TiDelete color='#5b5b5b' size={42} /></button>
          </div>
      </div>

      <div className='-workflow-panel'>
        <div className='-container'>
          <div>
            <div className='-title'>Logoutput</div>
              <LogOutput />
          </div>
        </div>
    
        <div className='-container'>
        <div>
          <div className='-title'>Results</div>
        </div>
         <Result />
        </div>



        <div className='-container lg'>
          <div className=''>
            <div className='-title'>Nodes</div>
            <Graph />
          </div>
          <div className=''>
            <button className='-button' onClick={() => navigate('setup')}>Edit workflow</button>
          </div>
            
        </div>

      </div>
      <Warning show={startWarning} close={() => setStartWarning(false)} text="Are you sure to start workflow?" action={() => setInProcess(true)}/>
      <Warning show={stopWarning} close={() => setStopWarning(false)} text="Are you sure to stop workflow?" action={() => setInProcess(false)}/>
      <Warning show={deleteWarning} close={() => setDeleteWarning(false)} text="Are you sure to delete workflow?" action={() => setInProcess(false)}/>
    </div>
  )
}
