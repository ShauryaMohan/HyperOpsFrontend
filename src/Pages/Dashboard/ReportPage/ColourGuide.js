

function ColourGuide(){
    return (
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
                    </div>
    )
}

export default ColourGuide;