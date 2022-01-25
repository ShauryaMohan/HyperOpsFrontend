import './PodInfo.css';
import {Doughnut, Line} from 'react-chartjs-2';
import { PodColours } from '../../Constants';
import {Chart, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement} from 'chart.js';

Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
Chart.register(LineElement);
Chart.register(PointElement);

function PodInfo({pod, data, time}) {
    let distribution = [data["passengers_entered"][59]];
        for (let i = 2; i < 11; i++){
            distribution.push(data["passengers_entered"][60*i - 1] - data["passengers_entered"][60*(i-1) - 1]);
        }
    let get_time = (secs) => {
        var mins = Math.floor(secs/60);
        var seconds = secs%60;
        var minutes = (mins % 60).toString();
        minutes = minutes.length === 1 ? "0" + minutes : minutes;
        seconds = (seconds % 60).toString();
        seconds = seconds.length === 1 ? "0" + seconds : seconds;
        var time = minutes + ":" + seconds ;
        return time;
    }
    let status = {0 : "Empty", 1 : "Ready", 2 : "Scheduled", 3 : "Dwelling", 4 : "Under Repair"};
    let platNumber = Math.floor(pod/6);
    let podNumber = pod%6;
    let podSign = {0 : "A", 1 : "B", 2 : "C", 3 : "D", 4 : "E", 5 : "F"};
    let ut_rate = Math.round(data["utilization_rate"][time]*10000)/100;
    let doughnutData = {
        labels: ["Empty", "Ready", "Scheduled", "Dwelling", "Under Repair"],
        datasets: [{
            label: '# of Pods',
            data: [data["pods_in_numbers"][time][0], data["pods_in_numbers"][time][1], data["pods_in_numbers"][time][2], data["pods_in_numbers"][time][3], data["pods_in_numbers"][time][4]],
            backgroundColor:[PodColours.EMPTY, PodColours.READY, PodColours.SCHEDULED, PodColours.DWELLING, PodColours.UNDER_REPAIR],
            hoverOffset: 4,
        }],
        
        
    };

    let doughnutOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        }
    }
    let minsDistribution = (time) => {
        let mins = Math.floor(time/60);
        let min = Math.min(...distribution);
        return [mins>=1?distribution[mins-1]:min,mins>=2?distribution[mins-2]:min,mins>=3?distribution[mins-3]:min,mins>=4?distribution[mins-4]:min,mins>=5?distribution[mins-5]:min].reverse();
    }
    let barData = {
        labels: ["-5 min", "-4 min", "-3 min", "-2 min", "-1 min"],
        datasets: [{
            backgroundColor: ['#722bc4', '#722bc4', '#722bc4', '#722bc4', '#722bc4'],
            data: minsDistribution(time),
        }],
    };

    let barOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    max: 500,
                }
            }]
        }
    };
    return (
        <div className="pod-info">
            {pod !== -1?
            <div>
                <div className="pod-info-header">
                    <span>Pod: </span> <span>{platNumber+1}{podSign[podNumber]}</span>
                </div>
                <div className='pod-info-item'>
                    <span>Status :</span> <span>{status[data["portal_states"][time][platNumber][podNumber][0]]}</span>
                </div>
                <div className='pod-info-item'>
                    <span>Occupancy :</span> <span>{data["portal_states"][time][platNumber][podNumber][1] === -1?0:data["portal_states"][time][platNumber][podNumber][1]}</span>
                </div>
                <div className='pod-info-item'>
                    <span>Scheduled in :</span> <span>{data["portal_states"][time][platNumber][podNumber][2]===-1?"NA":get_time(data["portal_states"][time][platNumber][podNumber][2])}</span>
                </div>
                <div className='pod-info-item'>
                    <span>Dwell Period :</span> <span>{data["portal_states"][time][platNumber][podNumber][3]===-1?"NA":data["portal_states"][time][platNumber][podNumber][3]}</span>
                </div>
            </div> : 
            <div className='visual-tool-container'>
                <div className='doughnut-container'>
                    <Doughnut data={doughnutData} options={doughnutOptions}/>
                </div>
                <div className='bar-container'>
                    <Line data={barData} options={{barOptions}}/>
                </div>
            </div>
            }
            <div className="pod-info-header">Portal State:</div>
            <div className='pod-info-item'>
                <span>Passengers Entered: </span> <span>{data["passengers_entered"][time]}</span>
            </div>
            <div className='pod-info-item'>
                <span>Passengers Departed: </span> <span>{data["passengers_boarded"][time]}</span>
            </div>
            <div className='pod-info-item'>
                <span>Passengers in-transit: </span> <span>{data["passengers_entered"][time] - data["passengers_boarded"][time]}</span>
            </div>
            <div className='pod-info-item'>
                <span>Convoys Departed: </span> <span>{data["convoys_left"][time]}</span>
            </div>
            <div className='pod-info-item'>
                <span>Utilization Rate: </span> <span>{ut_rate}%</span>
            </div>
            <div className='pod-info-item'>
                <span>Empty PodBays: </span> <span>{data["pods_in_numbers"][time][0]}</span>
            </div>
            <div className='pod-info-item'>
                <span>Ready Pods: </span> <span>{data["pods_in_numbers"][time][1]}</span>
            </div>
            <div className='pod-info-item'>
                <span>Scheduled Pods: </span> <span>{data["pods_in_numbers"][time][2]}</span>
            </div>
            <div className='pod-info-item'>
                <span>Dwelling Pods: </span> <span>{data["pods_in_numbers"][time][3]}</span>
            </div>
            <div className='pod-info-item'>
                <span>Under Repair PodBays: </span> <span>{data["pods_in_numbers"][time][4]}</span>
            </div>
        </div>
    )
}

export default PodInfo;