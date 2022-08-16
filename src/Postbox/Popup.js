import * as React from 'react';
import { Avatar, Button } from '@material-ui/core/';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import whats from '../images/whats.gif'
import publics from '../images/postanon.gif'
import createpost from '../images/createpost.gif'
import '../Postbox/Postbox.css'
import { now } from 'moment'
import { useDispatch } from 'react-redux';
import { getPost, createPost } from '../actions/actionpost';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [baseImage, setBaseImage] = React.useState('');
    const [baseImage2, setBaseImage2] = React.useState('');
    const [inputs, setInputs] = React.useState('');
    const dispatch = useDispatch();
    const handleClickOpen = (e) => {
        setOpen(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        console.log('e ', e)
        const postDatas = {
            message: inputs.commentmessage,
            commentmessage: inputs.commentmessage,
            commentavatar: baseImage2,
            commentname: inputs.commentname,
            commentimage: baseImage,
            reelimage: baseImage,
            tag: inputs.commentname,
            createdAt: now(),
        }
        console.log('Post data', postDatas)
        dispatch(createPost(postDatas));
        dispatch(getPost(postDatas));
        setOpen(false);
        setBaseImage('');
    };


    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);


    };


    const uploadImage2 = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage2(base64);


    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

    };


    return (
        <div >
            <button style={{ display: 'contents', cursor: 'pointer' }} ><img src={whats} alt="Whats on your mind" onClick={handleClickOpen} /></button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle style={{ borderBottom: '1px solid #eff2f5' }} >
                    <Button onClick={handleClose}
                        disableElevation
                        disableRipple
                        size="small"
                        sx={{
                            ml: 1,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }
                        }}
                        style={{ backgroundColor: 'transparent' }}

                    >
                        <img src={createpost} alt="" style={{ alignItems: 'center', alignContent: 'center' }} />
                    </Button>
                </DialogTitle>
                <DialogContent>

                    <div className="createsection">
                        <Avatar src={require(`../images/rand${Math.floor(Math.random() * 3)}.jpg`)} alt="" value={`rand${Math.floor(Math.random() * 3)}.jpg`} />&nbsp;
                        <img src={publics} alt="" />
                    </div>
                    <form action="#">
                        <TextareaAutosize
                            autoFocus
                            margin="dense"
                            name="commentmessage"
                            label="What's on your mind"
                            type="textarea"
                            width="100%"
                            border='none'
                            placeholder="What's on your mind?" spellCheck="false" required
                            onChange={(e) => setInputs({ ...inputs, commentmessage: e.target.value })}

                        />

                        <div >
                            Your Name: &nbsp;<input
                                name="commentname"
                                required
                                onChange={(e) => {
                                    setInputs({ ...inputs, commentname: e.target.value });
                                }}
                            />

                            <br />
                            <br />
                            <br />
                            Upload Your Image:  <input
                                type="file"
                                name="commentimage"
                                required
                                onChange={(e) => {
                                    uploadImage(e);
                                    setBaseImage({ commentimage: e.target.value });
                                }}
                            />

                            <br />
                            <br />
                            <br />

                            Avatar Pic: &nbsp;<input
                                type="file"
                                name="commentavatar"
                                required
                                onChange={(e) => {
                                    uploadImage2(e);
                                    setBaseImage2({ commentavatar: e.target.value });
                                }}
                            />
                            <br />
                            <br />
                        </div>

                        <DialogActions>
                            <Button variant="outlined" className="postbutton" onClick={handleClose} >Post</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </div >
    );
}
