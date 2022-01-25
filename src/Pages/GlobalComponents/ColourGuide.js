import './ColourGuide.css'
import { PodColours } from '../../Constants';

function ColourGuide(){
    return (
        <div  className="colourguide-container">
                    <div  className="colourguide-header">Guide for colour coding</div>
                        <div className="two-pod-container">
                        <div className="pod-containers">
                            <div className="pods" style={{borderColor: PodColours.SCHEDULED}}></div> <p>- Scheduled</p>
                        </div>
                        <div className="pod-containers">
                            <div className="pods" style={{borderColor: PodColours.READY}}></div> <p>- Ready</p>
                        </div>
                        </div>
                        <div className='two-pod-container'>
                        <div className="pod-containers">
                            <div className="pods" style={{borderColor: PodColours.DWELLING}}></div> <p>- Dwelling &nbsp;&nbsp;</p>
                        </div>
                        <div className="pod-containers">
                            <div className='pods' style={{borderColor: PodColours.UNDER_REPAIR}}></div> <p>- Repairing</p>
                        </div>
                        </div>
                        <div>
                            The number inside the pod represents occupancy.
                        </div>
                    </div>
    )
}

export default ColourGuide;