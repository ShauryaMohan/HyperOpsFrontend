
import Repair from './Repair';

function RepairList({repairs, id, onDelete}){
    return (
        <div className="RepairList" style={{color:"#722bc4"}}>
            {repairs.length? repairs.map(repair => {
                id++;
            return <Repair podbay={repair[0]} time={repair[1]} id = {id} onDelete={onDelete}/>}): <div>No repairs scheduled! To schedule tap on the above button.</div>}
            
        </div>

    )
}

export default RepairList;