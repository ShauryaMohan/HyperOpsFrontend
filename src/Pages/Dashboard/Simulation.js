import './Simulation.css';

function Simulation({name, date, id, server_id, openSimDet}){
    let created_date = date.slice(0, 10);
    let created_time = date.slice(11, 19);
    return (
        <div className="Simulation" onClick={() => {openSimDet(server_id)}} key={id}>
            {<div>{id}. {name}</div>}<div>{created_time}&nbsp;&nbsp;&nbsp;{created_date}</div>
        </div>
    );
}

export default Simulation;