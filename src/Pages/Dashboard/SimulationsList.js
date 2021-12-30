import Simulation from "./Simulation"
import "./SimulationsList.css";

function SimulationsList({simulations, simDet}){
    var i = 0
    return (
        <div className="simulations-list">
            <div className="simulations-list-header"><div> Name </div> <div>Created on</div></div>
            {simulations.length? simulations.map(simulation => {
                i++;
                var name = simulation[0];
                var date = simulation[1];
                return (<Simulation name={name} date={date} id={i} server_id={simulation[2]} openSimDet={simDet}/>)
            }):<div>No Simulation has been performed yet. Please click "New Simulation button" to start a new simulation.</div>}
        </div>
    )
}

export default SimulationsList;