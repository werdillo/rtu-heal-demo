import React, { useState } from 'react'
import nodes_data from '../json/get/Nodes';
import NodeSetup from '../components/modals/NodeSetup';
import { useNavigate } from 'react-router-dom';

export default function Nodes() {
  const [setupNode, setSetupNode] = useState(false);
  const [nodes, setNodes] = useState(nodes_data);
  const navigate = useNavigate()
  const addNewNode = () => {
    setNodes(currenodesnt => [...nodes, {name: 'Node 3', type: 'text' },]);
  };

  return (
    <>
          <button className='-btn' onClick={() => navigate(-1)}>Exit</button>
          {nodes.map((item, key) => {
                return(
                    <button className='-btn' onClick={() => setSetupNode(true)}>{item.name}</button>
                )
            }
            )}
        <button className='-btn new' onClick={addNewNode}>+</button>
        <NodeSetup show={setupNode} close={() => setSetupNode(false)} />
    </>
  )
}
