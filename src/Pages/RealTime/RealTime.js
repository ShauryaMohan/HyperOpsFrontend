import React, {useEffect, useState} from "react";
import PortalVisual from "./PortalVisual";
import PodInfo from "./PodInfo";
import "./RealTime.css";
import { Routes } from "../../Constants";


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
                }, i * 200);
            }
        
    }
    useEffect(() => {
        playRealTime();
    },[]);
    const graphView = () => setPod(-1);
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
        setRoute(Routes.SIMULATION_REPORT);
    }
    return (
        <div className="real-time-body">
            <div className='real-time-container'>
                <div className="real-time-header">
                    <span>Simulation: {name}</span><span>Time : {getTime(time)}</span>
                </div>
                <PortalVisual data={data} time={time} setPod={setPod}/>
                <div className="button-panel">
                    <div className='new-simulation-button' 
                        style={{
                            marginTop: "5px",
                            width: "25%",
                            justifyContent: "center",
                        }}
                        onClick={graphView}>
                        Portal Graph
                    </div>
                    <div className='new-simulation-button'
                        style={{
                            marginTop: "5px",
                            width: "25%",
                            justifyContent: "center",
                        }}>
                        Schedule Repair
                    </div>
                </div>
            </div>
            <PodInfo pod={pod} data={data} time={time}/>
            <div className="new-simulation-button" 
                style={{
                    marginTop: "20px", 
                    width: "10%", 
                    justifyContent: "center", 
                    bottom: "20px", 
                    right: "20px", 
                    position: "absolute"
                }} 
                onClick={handleClose}>
                    Back
            </div>
        </div>
    )
}

export default RealTime;