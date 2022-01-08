import Loading from "../GlobalComponents/Loading";
import Simulation from "./Simulation"
import "./SimulationsList.css";
import React from "react";

function SimulationsList({simulationList, simDet, setSimulationList}){
    var i = 0
    let onDeleteSimulation = (id) => {
        setSimulationList(simulationList.filter(simulation => simulation[2] !== id));
        fetch("http://localhost:8000/simulations/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            console.log(data)
            setSimulationList(data.map(simulation => {return [simulation.name,simulation.created_at, simulation.id]}));
        });
    }
    return (
        <div>
            <div className="simulations-header">
                <div> Name </div> <div>Created on</div>
            </div>
            <div className="simulations-list-container">
            
                <div className="simulations-list">
                    {simulationList === null ? <Loading/> : 
                    simulationList.length ? 
                    simulationList.map(simulation => {
                        i++;
                        var name = simulation[0];
                        var date = simulation[1];
                        return (<Simulation name={name} date={date} id={i} server_id={simulation[2]} openSimDet={simDet} onDeleteSimulation={onDeleteSimulation}/>)
                    }):<div>No Simulation has been performed yet. Please click "New Simulation button" to start a new simulation.</div>}
                </div>
            </div>
        </div>
    )
}

export default SimulationsList;