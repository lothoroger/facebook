import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Button, IconButton } from '@material-ui/core/';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import whats from '../images/whats.gif'
import publics from '../images/postanon.gif'
import poppost from '../images/poppost.jpg'
import createpost from '../images/createpost.gif'
import { getPost, createPost } from '../actions/actionpost';
import '../Postbox/Postbox.css'
import FileBase from 'react-file-base64';
import { now } from 'moment';
export default function FormDialoged() {
    const [opened, setOpened] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState('')
    const [inputMind, setInputMind] = React.useState('')
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpened(true);
    };

    const handleClose = (e) => {
        e.preventDefault();


        const postDatas = {
            message: inputMind.message,
            commentavatar: `rand${Math.floor(Math.random() * 3)}.jpg`,
            commentname: 'Anonyfamous',
            commentimage: inputMind.commentimage,
            reelimage: `reel${Math.floor(Math.random() * 3)}.jpg`,
            tag: `man${Math.floor(Math.random() * 3)}`,
            createdAt: now(),
        }

        dispatch(createPost(postDatas));
        dispatch(getPost(postDatas));

        setOpened(false);
    };

    return (
        <div >
            <button style={{ display: 'contents', cursor: 'pointer' }}> <img src={poppost} alt="" onClick={handleClickOpen} /></button>
            <Dialog open={opened} onClose={handleClose} >

                <DialogContent>

                    <form action="#">


                        <iconButton><FileBase type="file" multiple={false} onDone={({ base64 }) => ({ selectedFile: base64 })} /></iconButton>

                        <DialogActions>
                            <Button variant="outlined" className="postbutton" onClick={handleClose} >Upload Image</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </div >
    );
}
