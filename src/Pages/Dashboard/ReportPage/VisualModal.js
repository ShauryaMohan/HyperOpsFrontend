import Modal from '@mui/material/Modal';
import React, { useState} from 'react';
import PortalVisual from './PortalVisual';
import Slider from '@mui/material/Slider';
import VisibilityIcon from '@mui/icons-material/Visibility';



function VisualModal({data}){
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(0);

    
    const toggleModal = () => {
        setShow(!show);
    }
    const handleClose = () => {
        setShow(false);
    }
    const getTime = (mins) => {
        var hours = Math.floor(mins/60);
        hours = hours + 6;
        hours = hours % 24;
        hours = hours.toString();
        hours = hours.length === 1 ? "0" + hours : hours;
        var minutes = (mins % 60).toString();
        minutes = minutes.length === 1 ? "0" + minutes : minutes;
        var time = hours + ":" + minutes;
        return time;
    }
    const handleChange = (event, newValue) => {
        setTime(newValue);
        console.log(newValue);
    }
    
    return(
        <>
            <div className="new-simulation-button" style={{marginBottom:"20px", width: "20%", justifyContent: "space-evenly"}} onClick={toggleModal}><VisibilityIcon/><div>Portal View</div></div>
            <Modal open={show} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                
                <div className="ModalBody" style={{top: "10%", left : "10%", display: "flex", flexDirection: "row", width: "auto"}}>
                    <div style={{marginRight: "15px"}}>
                    <div style={{color: "#722bc4", display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "5px", fontWeight: "600", fontSize: "20px"}}><span>Simulation: {data["name"]}</span><span>Time : {getTime(time)}</span></div>
                    <PortalVisual data={data} time={time}/>
                    <Slider aria-label="time" value={time} onChange={handleChange} step={1} min={0} max={1085} valueLabelDisplay="off"/>
                    </div>
                    <div style={{padding: "30px", display : "flex", flexDirection: "column", borderLeftStyle: "solid", borderLeftWidth: "2px", borderLeftColor: "#722bc4", color: "#722bc4"}}>
                    <div style={{marginBottom: "15px", fontWeight: "600", fontSize: "20px"}}>Guide for colour coding</div>
                        <div style={{ display : "flex", flexDirection: "row"}}>
                        <div style={{display: "flex", flexDirection: "row", margin: "10px"}}>
                            <div style={{height: "45px", width: "30px", borderRadius: "5px", borderColor: "blue", borderStyle: "solid", borderWidth: "2px", backgroundColor: "white", color: "blue", margin: "2px", padding : "2px", boxSize: "border-box", display: "flex", justifyContent: "center", alignItems: "center"}}></div> <p>- Scheduled</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", margin: "10px"}}>
                            <div style={{height: "45px", width: "30px", borderRadius: "5px", borderColor: "green", borderStyle: "solid", borderWidth: "2px", backgroundColor: "white", color: "white", margin: "2px", padding : "2px", boxSize: "border-box", display: "flex", justifyContent: "center", alignItems: "center"}}></div> <p>- Ready</p>
                        </div>
                        </div>
                        <div style={{display : "flex", flexDirection: "row"}}>
                        <div style={{display: "flex", flexDirection: "row", margin: "10px"}}>
                            <div style={{height: "45px", width: "30px", borderRadius: "5px", borderColor: "red", borderStyle: "solid", borderWidth: "2px", backgroundColor: "white", color: "red", margin: "2px", padding : "2px", boxSize: "border-box", display: "flex", justifyContent: "center", alignItems: "center"}}></div> <p>- Dwelling &nbsp;&nbsp;</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", margin: "10px"}}>
                            <div style={{height: "45px", width: "30px", borderRadius: "5px", borderColor: 'black', borderStyle: "solid", borderWidth: "2px", backgroundColor: "white", color: "black", margin: "2px", padding : "2px", boxSize: "border-box", display: "flex", justifyContent: "center", alignItems: "center"}}></div> <p>- Repairing</p>
                        </div>
                        </div>
                        <div>
                            The number inside the pod represents occupancy.
                        </div>
                        <div className="new-simulation-button" style={{marginTop: "20px", width: "30%", justifyContent: "center"}} onClick={handleClose}>Close</div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default VisualModal;