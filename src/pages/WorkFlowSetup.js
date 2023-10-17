import React, { useState } from 'react'
import '../assets/scss/_workflow-setup.scss';
import Graph from '../components/Graph';
import Nodes from '../components/Nodes';


export default function WorkFlowSetup() {
  const [pipeline, setPipline] = useState('');

  return (
    <div className='workflow-setup'>
      <div className='-container'>
        <div className='-node-manager'>
          <Nodes />
        </div>
        <div className='-pipeline'>
          
          <div className='-title'>
            Flow pipeline
          </div>

          <div className='-wrapper'>
            <input className='-input' onChange={e => setPipline(e.target.value)}/>
            <button className='-button' onClick={console.log(pipeline)}>Compile</button>
          </div>
        </div>
        <div className='-output'>
          <div className='-box'>
            <div className='-title'>GRAPH</div>
            <Graph />

          </div>
          <div className='-box'>
            <div className='-title'>Compilation output</div>
          </div>
        </div>

      </div>
    </div>
  )
}
