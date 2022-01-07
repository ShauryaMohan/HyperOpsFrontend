import Modal from '@mui/material/Modal';
import React, { useState} from 'react';
import PortalVisual from './PortalVisual';
import Slider from '@mui/material/Slider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ColourGuide from "../GlobalComponents/ColourGuide";
import './VisualModal.css';



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
            <div className="new-simulation-button" 
                style={{
                    marginBottom:"20px", 
                    width: "20%", 
                    justifyContent: "space-evenly"
                }} 
                onClick={toggleModal}>
                    <VisibilityIcon/><div>Portal View</div>
            </div>
            <Modal open={show} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <div className="ModalBody" style={{top: "10%", left : "10%", display: "flex", flexDirection: "row", width: "auto"}}>
                    <div style={{marginRight: "15px"}}>
                        <div className='modal-header'>
                            <span>Simulation: {data["name"]}</span><span>Time : {getTime(time)}</span>
                        </div>
                        <PortalVisual data={data} time={time}/>
                        <Slider aria-label="time" value={time} onChange={handleChange} step={1} min={0} max={1085} valueLabelDisplay="off"/>
                    </div>
                    <ColourGuide/>
                </div>
            </Modal>
        </>
    )
}

export default VisualModal;