import "./Repair.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Repair({podbay,time,id, onDelete}){
    return (
        <div className="Repair" key={id}>
            <div className="Repair-podbay">Podbay : {podbay}</div>
            <div className="Repair-time">Time: {time} </div>
            <div className="Repair-delete" onClick={() => {onDelete(id-1)}}><DeleteOutlineIcon/></div>
        </div>
    );
}

export default Repair;