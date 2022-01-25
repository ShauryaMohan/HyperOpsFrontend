import VisualModal from '../RealTime/VisualModal';
import './SimulationReport.css';
import Loading from '../GlobalComponents/Loading';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Routes} from '../../Constants';


function SimulationReport({data, setRoute}){
    
    if (data === null || data === undefined ){
        return (<Loading/>);
    } else {
        let utilization_rate = data["statistics"]["Total Passengers boarded"]/data["statistics"]["Total Convoys Left"];
        utilization_rate = utilization_rate/168;
        utilization_rate = Math.round(utilization_rate*10000)/100;
        let mins = Math.floor(data["statistics"]["max waiting time"]/60);
        let secs = data["statistics"]["max waiting time"]%60;
        return (
            <div className="simulation-report">
                <div className="simulation-report-header">
                    
                </div>
                <div className="simulation-report-body">
                    <div className="simulation-report-body-summary">
                        <h1>Simulation Report</h1>
                        <div className='simulation-report-body-item'>
                            <div>Name:</div> <div>{data["name"]}</div>
                        </div>
                        <div className='simulation-report-body-item'>
                            <div>Total Passengers Entering the Portal:</div> <div>{data["statistics"]["Total Passengers entered"]}</div>
                        </div>
                        <div className='simulation-report-body-item'>
                            <div>Total Passengers that boarded a pod:</div> <div>{data["statistics"]["Total Passengers boarded"]}</div>
                        </div>
                        <div className='simulation-report-body-item'>
                            <div>Total Convoys left: </div><div>{data["statistics"]["Total Convoys Left"]}</div>
                        </div>
                        <div className='simulation-report-body-item'>
                            <div>Utilization Rate:</div> <div>{utilization_rate}%</div>
                        </div>
                        <div className='simulation-report-body-item'>
                            <div>Max Waiting Time:</div> <div>{mins} minutes {secs} seconds</div>
                        </div>
                    </div>
                </div>
                <div className="simulation-report-footer">
                    <VisualModal data={data}/>
                    <div className="new-simulation-button" 
                        style={{
                                marginBottom:"20px", 
                                width: "20%", 
                                justifyContent: "space-evenly"
                            }} 
                        onClick={() => setRoute(Routes.REAL_TIME)}>
                            <AccessTimeIcon/> <div>Real Time</div>
                    </div>
                </div>
            </div>
        );
    } 
}

export default SimulationReport;