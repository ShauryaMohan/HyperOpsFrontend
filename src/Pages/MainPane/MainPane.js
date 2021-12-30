import Dashboard from "../Dashboard/Dashboard";
import NewSimulation from "../Dashboard/NewSimulation";
import React, {useState, useEffect} from 'react';
import SimulationReport from "../Dashboard/ReportPage/SimulationReport";
import RealTime from "../Dashboard/ReportPage/RealTime";


function MainPane({route, setRoute}) {
    const [simulationList, setSimulationList] = useState([]);
    const [simulationCreated, setSimulationCreated] = useState(0);
    const [simulationData, setSimulationData] = useState(null);

    useEffect(() => {
        if(route !== "Simulation" && route !== "RealTime"){
            setSimulationData(null);
        }
    }, [route])  
    useEffect(() => {
        fetch("http://localhost:8000/simulations/").then(response => response.json()).then(data => {
            data = data.map(simulation => {return [simulation.name, simulation.created_at, simulation.id]});
            setSimulationList(data);
        });
    }, [route])
    const simDet = (id) => {
        setRoute("Simulation");
        id = id.toString();
        fetch("http://localhost:8000/simulations/" + id).then(response => response.json()).then(data => {
            setSimulationData(data);
        });
    }
    if (route === 'Dashboard') {
        return (
            <Dashboard setRoute={setRoute} simulationList={simulationList} simDet={simDet}/>
        );
    }
    else if (route === "NewSimulation") {
        return (
            <NewSimulation setRoute = {setRoute} setSimulationCreated={setSimulationCreated} simulationCreated={simulationCreated} setSimulationData={setSimulationData} simulationList={simulationList} setSimulationList={setSimulationList}/>
        );
    }
    else if (route === "Simulation") {
        return (
            <SimulationReport data = {simulationData} setRoute={setRoute}/>
        );
    } else if (route === "RealTime"){
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