import './App.css';
import './index.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import WorkFlowsManager from './pages/WorkFlowsManager';
import WorkFlow from './pages/WorkFlow';
import WorkFlowSetup from './pages/WorkFlowSetup';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WorkFlowsManager /> }/>
        <Route path="workflow" element={<WorkFlow /> }/>
        <Route path="workflow/setup" element={<WorkFlowSetup /> }/>
        <Route path="*" element={<p>not found</p> }/>
      </Route>
    </Routes>
  );
}

export default App;
