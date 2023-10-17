import React from 'react'
import Logs from '../json/get/LogOutput';


export default function LogOutput() {
  return (
    <>
      {Logs.map((item) => {
        return <div>{item.msg}</div> }
      )}
    </>
  )
}
