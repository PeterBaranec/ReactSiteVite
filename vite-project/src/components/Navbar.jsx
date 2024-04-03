import '../components/Navbar.css'
import logo from '../assets/react.svg'

function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav-logo'>
            <img src={logo} alt="react logo" />
            <h2>ReactFacts</h2>
            </div>
            <p>React Course - Project 1</p>
        </nav>
    )
}

export default Navbar