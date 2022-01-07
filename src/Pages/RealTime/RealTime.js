import React, {useEffect, useState} from "react";
import PortalVisual from "./PortalVisual";
import PodInfo from "./PodInfo";
import "./RealTime.css";


function RealTime({data, setRoute}){
    const [time, setTime] = useState(0);
    const [pod, setPod] = useState(-1);
    const name = data["name"]
    data = JSON.parse(data["real_time"])
    const playRealTime = () => {
            setTime(0);
            for (let i = 0; i < 600; i++) {
                setTimeout(() => {
                    setTime(i);
                }, i * 1000);
            }
        
    }
    useEffect(() => {
        playRealTime();
    },[]);

    const getTime = (secs) => {
        var mins = Math.floor(secs/60);
        var hours = Math.floor(mins/60);
        var seconds = secs%60;
        mins = mins%60;
        hours = hours + 6;
        hours = hours % 24;
        hours = hours.toString();
        hours = hours.length === 1 ? "0" + hours : hours;
        var minutes = (mins % 60).toString();
        minutes = minutes.length === 1 ? "0" + minutes : minutes;
        seconds = (seconds % 60).toString();
        seconds = seconds.length === 1 ? "0" + seconds : seconds;
        var time = hours + ":" + minutes + ":" + seconds;
        return time;
    }
    
    const handleClose = () => {
        setRoute("Simulation");
    }
    return (
        <div className="real-time-body">
                    <div style={{marginRight: "15px"}}>
                    <div style={{color: "#722bc4", display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "5px", fontWeight: "600", fontSize: "20px"}}><span>Simulation: {name}</span><span>Time : {getTime(time)}</span></div>
                    <PortalVisual data={data} time={time} setPod={setPod}/>
                    </div>
                   <PodInfo pod={pod} data={data} time={time}/>
                   <div className="new-simulation-button" style={{marginTop: "20px", width: "10%", justifyContent: "center", bottom: "20px", right: "20px", position: "absolute"}} onClick={handleClose}>Back</div>
                </div>
    )
}

export default RealTime;