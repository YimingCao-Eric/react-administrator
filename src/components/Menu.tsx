import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div className="offcanvas-md offcanvas-end bg-body-tertiary" id="sidebarMenu"
                 aria-labelledby="sidebarMenuLabel">
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to={'/users'} className="nav-link" aria-current="page">
                                Users
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/products'} className="nav-link" aria-current="page">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/orders'} className="nav-link" aria-current="page">
                                Orders
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;