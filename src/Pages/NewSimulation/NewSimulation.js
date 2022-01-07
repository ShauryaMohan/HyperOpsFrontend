// import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RepairList from './Repairs/RepairList';
import "./NewSimulation.css";
import AddRepairModal from './Repairs/AddRepairModal';
import React, {useState} from 'react';
import generateName from '../Utility/RandomName';


const NotUploaded = "File yet to be uploaded!";
function NewSimulation({setRoute, setSimulationCreated, simulationCreated, setSimulationData, simulationList, setSimulationList}){
    const [repairs,setRepairs] = useState([])
    const [file, setFile] = useState(NotUploaded);
    const [fileContent, setFileContent] = useState(null);
    // let global_restapi = "https://hyper-ops-restapi.herokuapp.com/simulations/";
    // let local_restapi = "http://localhost:8000/simulations/";
    var id = 0;
    var onDelete = (id) => {
        var someRepair = repairs.filter((repair, i) => {
            return id !== i
        })
        setRepairs(someRepair);
        console.log("delteted", id, repairs);
    }
    var onAdd = (repair) => {
        var idx = -1;
        repairs.forEach((item, index) => {
            if (item[0] === repair[0]){
                idx = index;
            }
        })
        if (idx === -1){
            repairs.push(repair);
            let someRepair = repairs.map((repair,i) => {return repair});
            setRepairs(someRepair);
        } else {
            alert("This pod bay is already scheduled to be repaired");
        }
        
    }
    const handleFileUpload = (e) => {
        let fileReader = new FileReader();
        let file =  e.target.files[0];
        if (file) {
            setFile(file.name);
            fileReader.onloadend = (e) => {
                let content = fileReader.result;
                content = JSON.parse(content);
                setFileContent(content);
            }
            fileReader.readAsText(file);
        } else {
            setFile(NotUploaded);
            setFileContent(null);
        }
    }
    

    
    const handleSubmit = () => {
        let name = generateName();
        if (fileContent){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name" : name,
                    "repairs" : repairs,
                    "file" : fileContent,
                })
            };

            setRoute("Simulation");
            fetch("http://localhost:8000/simulations/", requestOptions)
                .then(response => {
                    if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                  } else {
                    setRoute("NewSimulation");
                    alert(response.statusText);
                  }
                }).then(data => {
                        setSimulationCreated(simulationCreated + 1)
                        setSimulationData(data);
                        setSimulationList([...simulationList, [name, data.created_at, data.id]]);
                })
        } else {
            alert("Please upload a file");
        }
    }
    let uploadTextColor = file === NotUploaded ? "red" : "#722bc4";
    var UploadDivStyle = {color: uploadTextColor};
    return (
        <div className="NewSimulation">
            <div className="NewSimulation-header" style={{color: "#722bc4"}}><h1 >New Simulation</h1> <p>Add a JSON file for passenger input and schedule repairs for pod bays</p></div>
            <div className="NewSimulation-body">
            <div className='upload-div' style={UploadDivStyle}><label class="custom-file-upload"><input type="file" id="file" name="file" accept=".json" onChange={handleFileUpload}/>Upload File</label> {file} </div>
                {/* <button className='UploadButton'>Upload</button> */}
                <AddRepairModal repairs={repairs} onAdd={onAdd}/>
                <RepairList repairs={repairs} onDelete={onDelete} id={id}/>
                <div className="new-simulation-button" style={{width:"10%", position: "absolute", bottom: "20px", textAlign: "center", justifyContent: "center"}} onClick={handleSubmit}>Start Simulation</div>
            </div>
        </div>
    )
}

export default NewSimulation;