import SimulationsList from "./SimulationsList";
import './Dashboard.css';
import AddIcon from '@mui/icons-material/Add';
import {Routes} from '../../Constants';

function Dashboard({setRoute, simulationList, simDet, setSimulationList}){
    return (
        <div className="Dashboard">
            <div className="Dashboard-header">
                <div style={{color:"#722bc4"}}><h1>Dashboard:</h1></div>
                <div className="new-simulation-button" onClick={() => {setRoute(Routes.NEW_SIMULATION)}}><div className="button-icon"><AddIcon/></div>New Simulation </div>
            </div>
            <div className="Dashboard-body">
                <div className="simulations">
                    <SimulationsList simulationList={simulationList} simDet={simDet} setSimulationList={setSimulationList}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;