import React, { useState } from "react";
import './header.scss'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="header-container">
            <div className="contact-icon"><i class="fas fa-phone"></i>
            <h3 className="phone-no">98222-21372</h3>
            </div>
            <img src="/dhorajiwala-logo" alt="dhorajiwala logo" className="dhorajiwala-logo"/>
            <div className="icons-container">
            <div className={`search ${isVisible === true ? 'active' : ''}`}>
                <input type='text' className='input' placeholder='search' />
                <button className='btn' onClick={handleClick}>
                    <i className='fas fa-search'></i>
                </button>
            </div>
            <i class="fas fa-user"></i>
            <i class="fas fa-shopping-cart"></i>
            </div>
        </div>
    )
}

