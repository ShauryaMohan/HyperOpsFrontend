import './PodInfo.css';

function PodInfo({pod, data, time}) {
    console.log(data)
    let status = {0 : "Empty", 1 : "Ready", 2 : "Scheduled", 3 : "Dwelling", 4 : "Under Repair"};
    let platNumber = Math.floor(pod/6);
    let podNumber = pod%6;
    let podKey = platNumber*10 + podNumber;
    let podSign = {0 : "A", 1 : "B", 2 : "C", 3 : "D", 4 : "E", 5 : "F"};
    console.log(data["portal_states"][time][platNumber][podNumber])
    return (
        <div className="pod-info">
            <div style={{color: "#722bc4", display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "5px", fontWeight: "600", fontSize: "20px"}}><span>Pod: </span> <span>{platNumber+1}{podSign[podNumber]}</span></div>
            <div className='pod-info-item'><span>Status :</span> <span>{status[data["portal_states"][time][platNumber][podNumber][0]]}</span></div>
            <div className='pod-info-item'><span>Occupancy :</span> <span>{data["portal_states"][time][platNumber][podNumber][1] === -1?0:data["portal_states"][time][platNumber][podNumber][1]}</span></div>
            <div className='pod-info-item'><span>Scheduled in :</span> <span>{data["portal_states"][time][platNumber][podNumber][2]===-1?"NA":data["portal_states"][time][platNumber][podNumber][2]}</span></div>
            <div className='pod-info-item'><span>Dwell Period :</span> <span>{data["portal_states"][time][platNumber][podNumber][3]===-1?"NA":data["portal_states"][time][platNumber][podNumber][3]}</span></div>
            <p>Tickets Allocated: {data["allocation_dict"][time][podKey].map(ticket => <div>{ticket}</div>)}</p>
        </div>
    )
}

export default PodInfo;