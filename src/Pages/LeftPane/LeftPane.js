import LeftPaneOptions from './LeftPaneOptions';
import './LeftPane.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Routes} from '../../Constants';

function LeftPane({setRoute}){
    return (
        <div className="leftpane">
            <LeftPaneOptions 
                text="Dashboard" 
                icon={<DashboardIcon/>} 
                onclick={() => {setRoute(Routes.DASHBOARD)}}
            />
            <LeftPaneOptions 
                text="New Simulation" 
                icon={<AddCircleIcon/>}  
                onclick={() => {setRoute(Routes.NEW_SIMULATION)}}
            />
            <LeftPaneOptions 
                text="Help" 
                icon={<HelpIcon/>}  
                onclick={() => {setRoute(Routes.HELP)}}/>
        </div>
    )
}

export default LeftPane;