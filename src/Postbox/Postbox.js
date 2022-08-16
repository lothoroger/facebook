import React, { useState } from 'react'
import '../Postbox/Postbox.css'
import whats from '../images/whats.gif'
import me from '../images/me.gif'


function Postbox() {
    const [state, setState] = useState()
    console.log('Initial state', state)
    const imageClick = () => {
        setState({ isOpen: true });
        console.log('Click', state);


    }

    return (
        <div className="postbox_top">
            <img src={whats} alt="Whats on your mind" onClick={() => imageClick()} />&nbsp;
            {console.log('Initial state2', state)}
            {(state !== undefined && !state.IsOpen) && (
                <div className="container">
                    <div class="wrapper">
                        <section class="post">
                            <header>Create Post</header>
                            <h1> <textarea placeholder="What's on your mind?" spellcheck="false" required></textarea></h1>
                        </section>
                    </div>
                </div>
            )}
        </div>

    );
}


export default Postbox