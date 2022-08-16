import React from 'react'
import '../Header/Headercss.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/ListAlt'
import SubsIcon from '@material-ui/icons/VideoLibraryOutlined'
import StoreIcon from '@material-ui/icons/StoreOutlined'
import Groups from '@material-ui/icons/SupervisedUserCircle'
import fblogo from '../images/fblogo.gif'
import gaming from '../images/gamings.gif'
import mainmenu from '../images/centermenu.gif'
import rightmenu from '../images/rightmenu.gif'
import me from '../images/me.gif'
import menu from '../images/menu.gif'
import ForumIcon from '../images/chatlogo.gif'
import createpost from '../images/createpost.gif'
import SupervisedIcon from '@material-ui/icons/PeopleOutline'
import { Avatar, IconButton, Badge } from '@material-ui/core'
import AddIcon from '@material-ui/icons/BlurLinear'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'



export default function index() {
    return (
        <>
            <div className="header">

                <div className="left_header">
                    <img src={fblogo} alt="fblogo" height="50" />
                    <div className="left_header_input">

                        <SearchIcon />&nbsp;
                        <input type="text" placeholder="Search Fakebook" />

                    </div>
                </div>
                <div className="center_header">
                    <div className="center_header_option">
                        <img src={mainmenu} alt='mainmenu' useMap="#center-map" />
                        <map name="center-map">
                            <area alt="" title="Home" href="https://www.facebook.com/" coords="10,30,100" shape="circle" />
                            <area alt="" title="Friends" href="https://www.facebook.com/friends" coords="149,30,100" shape="circle" />
                            <area alt="" title="Watch" href="https://www.facebook.com/watch" coords="250,30,100" shape="circle" />
                            <area alt="" title="Marketplace" href="https://www.facebook.com/marketplace" coords="390,30,100" shape="circle" />
                            <area alt="" title="News" href="https://www.facebook.com/news" coords="590,30,100" shape="circle" />
                        </map>
                    </div>

                </div>
                <div className="right_header">

                    <div className="right_header_info">
                        <img src={rightmenu} alt='Commenter' useMap="#right-map" />
                        <map name="right-map">
                            <area alt="" title="Profile" href="https://www.facebook.com/profile.php" coords="120,30, 50" shape="circle" />
                            <area alt="" title="Messenger" href="https://www.messenger.com/t/" coords="145,30, 80" shape="circle" />
                            <area alt="" title="Notification" href="https://www.messenger.com/notifications/" coords="185, 30,80" shape="circle" />
                            <area alt="Account" title="Account" href="https://www.facebook.com/" coords="290, 30, 80" shape="circle" />
                        </map>

                    </div>

                </div>


            </div>
        </>
    )
}