import React from 'react'
import { Avatar } from '@material-ui/core'
import './SideBarcss.css'

function SidebarRow({ src, title }) {

    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {
                (title === 'RogerL') && (
                    <p>{title}</p>
                )
            }
            {
                (title === 'Find Friends') && (
                    <p><a href="https://www.facebook.com/friends" style={{ textDecoration: 'none' }}>{title}</a></p>
                )
            }

            {
                (title === 'Groups') && (
                    <p><a href="https://www.facebook.com/groups" style={{ textDecoration: 'none' }}>{title}</a></p>
                )
            }

            {
                (title === 'New') && (
                    <p><a href="https://www.facebook.com/news" style={{ textDecoration: 'none' }}>{title}</a></p>
                )
            }

            {
                (title === 'Marketplaces') && (
                    <p><a href="https://www.facebook.com/marketplace" style={{ textDecoration: 'none' }}>{title}</a></p>
                )
            }
            {
                (title === 'Watch') && (
                    <p><a href="https://www.facebook.com/watch/" style={{ textDecoration: 'none' }}>{title}</a></p>
                )
            }
        </div >


    )

}
export default SidebarRow