import SimulationsList from "./SimulationsList";
import './Dashboard.css';
import AddIcon from '@mui/icons-material/Add';


function Dashboard({setRoute, simulationList, simDet}){
    return (
        <div className="Dashboard">
            <div className="Dashboard-header">
                <div><h1>Dashboard:</h1></div>
                <div className="new-simulation-button" onClick={() => {setRoute("NewSimulation")}}><div className="button-icon"><AddIcon/></div>New Simulation </div>
            </div>
            <div className="Dashboard-body">
                <div className="simulations">
                    <h3>Simulations:</h3>
                    <SimulationsList simulations={simulationList} simDet={simDet}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;