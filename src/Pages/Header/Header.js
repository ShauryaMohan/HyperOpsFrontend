import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BoltIcon from '@mui/icons-material/Bolt';

function Header(){
    return (
        <div className="header">
            <div className="header-logo">
                <BoltIcon fontSize='large'/>
                HyperOps
            </div>
            <div className="header-user">
                <p>Hello, User!</p>
                <div className='header-icon'><AccountCircleIcon fontSize='large'/></div>
            </div>
        </div>
    );
}

export default Header;