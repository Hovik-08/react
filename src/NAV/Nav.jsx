import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Nav({ setSearchTerm }) {
    const [dropdown, fdropdown] = useState(false);
    const [login, flogin] = useState(false);

    const srch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <nav className="nav-container">
            <div className="left">
                <Link to="/anime">
                    <img src={logo} alt="logo" />
                    <span style={{ marginLeft: 5 }}>-Film</span>
                </Link>
            </div>
            <div className="middle">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={srch}
                />
            </div>
            <div className="right">
                <Link to="/login">
                    <button onClick={() => flogin(!login)}>
                        Login
                    </button>
                </Link>
                <div
                    className="dropdown"
                    onClick={() => fdropdown(!dropdown)}
                >
                    <span className='a'>Movie List</span>
                    <span className='b'>
                        [=]
                    </span>
                    {dropdown && (
                        <div className="dropdown-list">
                            <ul>
                                <Link to="/anime">Anime</Link>
                                <Link to="/about">Naruto</Link>
                                <Link to="/aziz">Drama</Link>
                                <Link to="/horror">Horror</Link>
                                <Link to="/adventurous">Adventurous</Link>
                                <Link to="/detective">Detective</Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Nav;