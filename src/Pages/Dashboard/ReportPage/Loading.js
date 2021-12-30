import ReactLoading from 'react-loading';
function Loading(){
    return (
        <div style={{height: "90%", width: "70%",padding: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <ReactLoading type="spin" color="#722bc4" height={100} width={100} />
        </div>
    );
}
export default Loading;