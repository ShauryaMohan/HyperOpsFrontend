import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import React, {useState} from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuItem from '@mui/material/MenuItem';
import "./AddRepairModal.css";
import { FormControl, InputLabel } from '@mui/material';




function AddRepairModal({repairs, onAdd}){
    const [show, setShow] = useState(false);
    var ButtonColour = repairs.length < 2 ? "#722bc4" : "#722bc498";
    const toggleModal = () => {
        setShow(!show && repairs.length < 2);
        if (repairs.length >= 2){
            alert("You can only schedule two repairs at a time");
        }
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleChangePlatform = (event) => {
        console.log(event.target.value);
        setPlatformNumber(event.target.value);
    }
    const handleChangePodbay = (event) => {
        console.log(event.target.value);
        setPodBay(event.target.value);
    }
    const handleChangeHour = (event) => {
        console.log(event.target.value);
        setHour(event.target.value);
    }
    const handleChangeMinute = (event) => {
        console.log(event.target.value);
        setMinute(event.target.value);
    }
    const [platformNumber, setPlatformNumber] = useState(1);
    const [podBay, setPodBay] = useState("A");
    const [hour, setHour] = useState("06");
    const [minute, setMinute] = useState("00");
    const sixty = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
    const Menu_Items = sixty.map((number) => {return(<MenuItem value={number}>{number}</MenuItem>)});
    return (
        <>
            <div className="new-simulation-button" style={{marginBottom:"20px", backgroundColor: ButtonColour}} onClick={toggleModal}><div style={{marginRight:"10px"}}><AccessTimeIcon/></div><div>Schedule Repair</div></div>
            <Modal open={show} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                
                <div className="ModalBody">
                    <div><h2>Schedule Repair</h2></div>
                    <div className="Modal-podbay">
                        <p>Pod Bay:</p>
                    <FormControl sx={{m:1, minWidth: 120}}>
                    <InputLabel id="demo-simple-select-label">Platform</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={platformNumber}
                        label="Platform"
                        onChange={handleChangePlatform}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl sx={{m:1, minWidth: 120}}>
                    <InputLabel id="demo-simple-select-label">Pod Bay</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={podBay}
                        label="PodBay"
                        onChange={handleChangePodbay}>
                        <MenuItem value="A">A</MenuItem>
                        <MenuItem value="B">B</MenuItem>
                        <MenuItem value="C">C</MenuItem>
                        <MenuItem value="D">D</MenuItem>
                        <MenuItem value="E">E</MenuItem>
                        <MenuItem value="F">F</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    <div className='ModalTime'> 
                        <p>&nbsp; Time: &nbsp;</p>
                        <FormControl sx={{m:1, minWidth: 120}}>
                        <InputLabel id="demo-simple-select-label">Hour</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={hour}
                            label="Hour"
                            onChange={handleChangeHour}
                            >
                            <MenuItem value={"06"}>06</MenuItem>
                            <MenuItem value={"07"}>07</MenuItem>
                            <MenuItem value={"08"}>08</MenuItem>
                            <MenuItem value={"09"}>09</MenuItem>
                            <MenuItem value={"10"}>10</MenuItem>
                            <MenuItem value={"11"}>11</MenuItem>
                            <MenuItem value={"12"}>12</MenuItem>
                            <MenuItem value={"13"}>13</MenuItem>
                            <MenuItem value={"14"}>14</MenuItem>
                            <MenuItem value={"15"}>15</MenuItem>
                            <MenuItem value={"16"}>16</MenuItem>
                            <MenuItem value={"17"}>17</MenuItem>
                            <MenuItem value={"18"}>18</MenuItem>
                            <MenuItem value={"19"}>19</MenuItem>
                            <MenuItem value={"20"}>20</MenuItem>
                            <MenuItem value={"21"}>21</MenuItem>
                            <MenuItem value={"22"}>22</MenuItem>
                            <MenuItem value={"23"}>23</MenuItem>
                            </Select>
                            </FormControl>
                            <FormControl sx={{m:1, minWidth: 120}}>
                            <InputLabel id="demo-simple-select-label">Minute</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={minute}
                                label="Minute"
                                onChange={handleChangeMinute}
                                >
                                {Menu_Items}
                                </Select>
                                </FormControl>
                    </div>
                    <div className="modal-footer">
                        <div className="new-simulation-button" onClick={() => {handleClose();}}style={{marginRight: "10px", backgroundColor: "white", color: "#722bc4", borderStyle: "solid", borderWidth: "2px", display: "flex", justifyContent: 'center'}}>Cancel</div>
                        <div className="new-simulation-button" 
                        onClick={() => {
                            let arg1 = platformNumber.toString().concat(podBay);
                            let arg2 = hour.concat(":").concat(minute).concat(":00");
                            onAdd([arg1, arg2]);
                            handleClose();
                        }} 
                        style={{marginLeft: "10px", backgroundColor: "white", color: "#722bc4", borderStyle: "solid", borderWidth: "2px", display: "flex", justifyContent: 'center'}}>Schedule</div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddRepairModal;