import ReactLoading from 'react-loading';
import './Loading.css';

function Loading(){
    return (
        <div className='loading-container'>
            <ReactLoading type="spin" color="#722bc4" height={100} width={100} />
        </div>
    );
}
export default Loading;