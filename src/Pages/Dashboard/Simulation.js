import './Simulation.css';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Simulation({name, date, id, server_id, openSimDet, onDeleteSimulation}){
    let created_date = date.slice(0, 10);
    let created_time = date.slice(11, 19);
    return (
        <div className="simulation-container">
        <div className="Simulation" onClick={() => {openSimDet(server_id)}} key={id}>
            <div>{id}. {name}</div><div>{created_time}&nbsp;&nbsp;&nbsp;{created_date}&nbsp;&nbsp;&nbsp;</div>
            
        </div>
        <div className="simulation-delete" onClick={() => {onDeleteSimulation(server_id)}}>
            <DeleteOutlineIcon/>
        </div>
        </div>
    );
}

export default Simulation;