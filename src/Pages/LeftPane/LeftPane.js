import LeftPaneOptions from './LeftPaneOptions';
import './LeftPane.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function LeftPane({setRoute}){
    return (
        <div className="leftpane">
            <LeftPaneOptions text="Dashboard" icon={<DashboardIcon/>} onclick={() => {setRoute("Dashboard"); console.log("clicked Dashboard")}}/>
            <LeftPaneOptions text="New Simulation" icon={<AddCircleIcon/>}  onclick={() => {setRoute("NewSimulation"); console.log("clicked New Simulation")}}/>
            <LeftPaneOptions text="Help" icon={<HelpIcon/>}  onclick={() => {setRoute("Help"); console.log("clicked Help")}}/>
        </div>
    )
}

export default LeftPane;