import React, { useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/scss/_workflow-manager.scss';
import WorkFlows_data from '../json/get/WorkFlows';


export default function WorkFlowsManager() {
    const [workFlows, setWorkFlows] = useState(WorkFlows_data);
    

    const addWorkFlow = () => {
        setWorkFlows(workFlows => [...workFlows,     
            {
                name: 'Work flow 3',
                status: 'pending',
                date: '29.11.2022'
        },]);
      };

    const WorkFlowItem = ({title, date, status}) => {
        return (
            <Col lg={3} md={4} sm={6} >
                <Link to='workflow' style={{ textDecoration: 'none' }}>
                    <div className='workflow-object'>
                        <div className='-status-wrapper'>
                        <div className='-text lg'>{title}</div>
                        {status === "danger" &&<div className='status error'/>}
                        {status === "pending" &&<div className='status pending'/>}
                        {status === "active" && <div className='status active'/>}
                        </div>
                        <hr style={{backgroundColor: "#2E2E2E", height: 1, margin: "6px 0"}}/>
                        <div className='-text'>Creation date: {date}</div>
                        <div className='-text'>Rinning time: 2h</div>
                    </div>
                </Link>
            </Col>
        );
    } 
  return (
    <div className='workflow-manager'>
        <div className='page-title'>Your workflows</div>
        <Container fluid>
            <Row>
                {workFlows.map((item, key) => { return <WorkFlowItem title={item.name} date={item.date} status={item.status} /> })}
                <Col lg={3} md={4} sm={6} >
                    <div className='workflow-object' on onClick={addWorkFlow}>
                        +
                    </div>
                </Col>

            </Row>
        </Container>
    </div>
  )
}
