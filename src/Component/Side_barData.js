import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as GoIcons from "react-icons/go";

const Side_barData=[
    {
        title:'Home',
        path:'/',
        icons:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Contact',
        path:'/contact',
        icons:<AiIcons.AiFillContacts/>,
        cName:'nav-text'
    },
    {
        title:'About',
        path:'/about',
        icons:<FcIcons.FcAbout/>,
        cName:'nav-text'
    },
    {
        title:'Report',
        path:'/report',
        icons:<GoIcons.GoReport/>,
        cName:'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icons:<AiIcons.AiOutlineTeam/>,
        cName:'nav-text'
    },
]

export default Side_barData;