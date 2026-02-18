import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

export default function ImagePopUp(props: { image: any, open: boolean, handleClose: () => void }) {
    
    return (
        <div>

            <Dialog
                open={props.open}
                onClose={props.handleClose}
                maxWidth={false}

                PaperProps={{
                    style: {
                        width: '90vw',
                        height: '90vh',
                        overflow: 'hidden',   // 👈 critical
                        background: '#000',
                    },
                }}
            >
                <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent
                    style={{
                        padding: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',  // 👈 critical
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src={props.image}
                        alt=""
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain', // 👈 no crop, no distortion
                            display: 'block',
                            margin: 0
                        }}
                    />
                </DialogContent>
            </Dialog>

        </div>
    );
}