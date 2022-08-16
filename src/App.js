import React from 'react'
import "./App.css"
import Header from './Header/'
import SideBar from './SideBar/'
import Feed from './Feed/Feed'
import Widget from './Widget/'


function App() {


    return (
        <div className="app_top">
            <Header />
            <div className="app_body" >
                <SideBar />
                <Feed />
                <Widget />
            </div>
        </div>
    )
}

export default App