import React from 'react'
import './SideBarcss.css'
import me from '../images/me.gif'
import SidebarRow from './SideBarRow.js'
import friends from '../images/peoplef.png'
import group from '../images/groupf.png'
import news from '../images/newf.png'
import marketplace from '../images/marketf.png'
import watch from '../images/watchf.png'
import { IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default function index() {
    return (
        <div className='sidebar_top'>
            <SidebarRow src={me} title='RogerL' />
            <SidebarRow src={friends} title='Find Friends' href="https://www.facebook.com/friends" />
            <SidebarRow src={group} title='Groups' />
            <SidebarRow src={news} title='New' />
            <SidebarRow src={marketplace} title='Marketplaces' />
            <SidebarRow src={watch} title='Watch' />
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>

        </div >

    )

}

