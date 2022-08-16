import * as React from 'react';
import { Button, IconButton } from '@material-ui/core/';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import feeling from '../images/feeling.jpg'
import '../Postbox/Postbox.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'


export default function FormDialog() {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = (e) => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);

    };




    return (
        <div className="feeling_top"> <button style={{ display: 'contents', cursor: 'pointer' }} onClick={handleClickOpen}><InsertEmoticonIcon style={{ color: "orange" }} />
            <h3 style={{ color: 'gray', fontSize: 'Large' }}>&nbsp;Feeling/Activity</h3></button>
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
                        <img src={feeling} alt="" style={{ alignItems: 'center', alignContent: 'center' }} />
                    </Button>
                </DialogTitle>


            </Dialog>
        </div >
    );
}
