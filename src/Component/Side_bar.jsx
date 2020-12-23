import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Side_barData from './Side_barData';
import Sidebar from './Sidebar.css';
import { IconContext } from 'react-icons';


function Side_bar() {
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
            <div className='container'>
                <div className="side-bar">
                    <Link to="#" className="menu_bar">
                        <FaIcons.FaBars onClick={showSideBar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className='nav-menu-items' onClick={showSideBar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {Side_barData.map((items, idx) => {
                            return (
                                <li key={idx} className={items.cName}>
                                    <Link to={items.path}>
                                        {items.icons}
                                        {<span className='ttl' >{items.title}</span>}
                                    </Link>
                                </li>
                            )
                        }

                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Side_bar;
