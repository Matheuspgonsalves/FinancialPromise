import './Navbar.css'

function Navbar() {
    return (
        <nav id="nav">
            <div id="logo">
                <h1><a href="">Financial Promise</a></h1>
            </div>
            <div id="register-login">
                <ul>
                    <li><button className="login">Login</button></li>
                    <li><button className="register">Sign Up</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
