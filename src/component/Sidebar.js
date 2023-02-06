import React, {useState} from "react";
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaBars,
} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [

        {
            path:"/location",
            name:"Location",
            icon:<FaUserAlt/>
        },
        {
            path:"/department",
            name:"Department",
            icon:<FaRegChartBar/>
        },
        {
            path:"/",
            name:"Employee",
            icon:<FaUserAlt/>
        },

        {
            path:"/project",
            name:"Project",
            icon:<FaRegChartBar/>
        },
    ]
    return(
       <div className="view">
            <div style={{width: isOpen ?  "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onMouseOver={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <div className="main_page">{children}</div>
       </div>
    );
}
export default Sidebar;