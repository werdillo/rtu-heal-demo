import React, { useState } from 'react'
import '../assets/scss/_components.scss';
import ChooseFile from '../components/modals/ChooseFile';

export default function Result() {
  const [showFiles, setShowFiles] = useState(false);
  return (
    <>
   <div className='-button-wrapper'>
     <button className='-button' onClick={() => setShowFiles(true)}>Download</button>
     <button className='-button'>Show 3d</button>
     <button className='-button'>Get url</button>
   </div>
   <ChooseFile show={showFiles} close={() => setShowFiles(false)} />
   </>
  )
}
