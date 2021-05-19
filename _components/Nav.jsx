import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Trang chủ</NavLink>
                <NavLink to="/sample_collection" className="nav-item nav-link">Thu gom mẫu</NavLink>
                <NavLink to="/users" className="nav-item nav-link">Soi mẫu</NavLink>
                <NavLink to="/users" className="nav-item nav-link">HPLC Hóa định lượng</NavLink>
            </div>
        </nav>
    );
}

export { Nav }; 