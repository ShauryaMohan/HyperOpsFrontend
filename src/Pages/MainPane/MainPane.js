import Dashboard from "../Dashboard/Dashboard";
import NewSimulation from "../NewSimulation/NewSimulation";
import React, {useState, useEffect} from 'react';
import SimulationReport from "../ReportPage/SimulationReport";
import RealTime from "../RealTime/RealTime";
import {Routes} from '../../Constants';


function MainPane({route, setRoute, simulationList, setSimulationList}) {
    
    const [simulationCreated, setSimulationCreated] = useState(0);
    const [simulationData, setSimulationData] = useState(null);
    
    useEffect(() => {
        if(route !== Routes.SIMULATION_REPORT && route !== Routes.REAL_TIME){
            setSimulationData(null);
        }
    }, [route])  

    

    const simDet = (id) => {
        setRoute(Routes.SIMULATION_REPORT);
        id = id.toString();
        fetch("http://localhost:8000/simulations/" + id).then(response => response.json()).then(data => {
            setSimulationData(data);
        });
    }
    
    if (route === Routes.DASHBOARD) {
        return (
            <Dashboard setRoute={setRoute} simulationList={simulationList} simDet={simDet} setSimulationList={setSimulationList}/>
        );
    }
    else if (route === Routes.NEW_SIMULATION) {
        return (
            <NewSimulation setRoute = {setRoute} setSimulationCreated={setSimulationCreated} simulationCreated={simulationCreated} setSimulationData={setSimulationData} simulationList={simulationList} setSimulationList={setSimulationList}/>
        );
    }
    else if (route === Routes.SIMULATION_REPORT) {
        return (
            <SimulationReport data = {simulationData} setRoute={setRoute}/>
        );
    } else if (route === Routes.REAL_TIME){
        return (
            <RealTime data = {simulationData} setRoute={setRoute}/>
        )
    }
    else {
        return (
            <div>Help</div>
        );
    }
}
export default MainPane;