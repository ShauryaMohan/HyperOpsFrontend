import './PortalVisual.css';

function PodVisual({pod, data, platform, setPod}){
    var podColor = data[0] === 0? 'white' : (data[0] === 1? 'green' : (data[0] === 2? 'blue' : (data[0] === 3? 'red' : 'black')));
    var Podstyle = {height: "45px", width: "30px", borderRadius: "5px", borderColor: podColor, borderStyle: "solid", borderWidth: "2px", backgroundColor: "white", color: podColor, margin: "2px", padding : "2px", boxSize: "border-box", display: "flex", justifyContent: "center", alignItems: "center"};
    return (
        <div className="pod-visual" key={pod} style={Podstyle} onClick={()=>{setPod(platform*6 + pod); console.log(platform*6 + pod)}}>
            {data[1]===-1?0:data[1]}
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
