import './PortalVisual.css';
import BuildIcon from '@mui/icons-material/Build';
import { PodColours } from '../../Constants';

function PodVisual({pod, data, platform, setPod}){
    var podColor =   data[0] === 0? PodColours.EMPTY : 
                    (data[0] === 1? PodColours.READY : 
                    (data[0] === 2? PodColours.SCHEDULED : 
                    (data[0] === 3? PodColours.DWELLING : 
                                    PodColours.UNDER_REPAIR)));

    var podText =   data[0] === 4? <BuildIcon/> :
                    data[0] === 0? <div></div> : 
                    data[1] === -1? 0:
                                    data[1];
    
    var Podstyle = {color: podColor, borderColor: podColor};
    return (
        <div className="podBays" key={pod} style={Podstyle} onClick={()=>{setPod(platform*6 + pod); console.log(platform*6 + pod)}}>
            {podText}
        </div>
    )
}


function PlatformVisual({platform, data, setPod}){
    return (
        <div className="platform-visual" key={platform}>
            {data.length? data.map((item, pod) => { 
                return ( <PodVisual pod={pod} data={item} platform={platform} setPod={setPod}/> )
            }): <div>No data</div>}
        </div>
    )
}


function PortalVisual({data, time, setPod}){
    if (data){
        data = data["portal_states"];
        if (data){
            data = data[time];
        }
    }
    
    return (
        <div className="portal-visual">
            {data? data.map((item, platform) => {
                return (<div><p style={{textAlign: "center", color: "#722bc4", fontWeight: "500"}}>{platform + 1}</p><PlatformVisual platform={platform} data={item} setPod={setPod}/></div>)
            }): <div>No data</div>}
        </div>
    );
}

export default PortalVisual;
