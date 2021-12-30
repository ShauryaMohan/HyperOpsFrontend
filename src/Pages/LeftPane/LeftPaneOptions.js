import './LeftPaneOptions.css';

function LeftPaneOptions({text, icon, onclick}) {
    return (
        <div className="leftpane-option" onClick={() => onclick()}>
                <div className="leftpane-option-text" > {text}</div>
                <div className="leftpane-option-icon"> {icon} </div>
        </div>
    )
}

export default LeftPaneOptions;