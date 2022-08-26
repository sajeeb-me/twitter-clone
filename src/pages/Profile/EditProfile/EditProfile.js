import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Avatar } from "@mui/material";
import TextField from '@mui/material/TextField';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './EditProfile.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 8,
};

export default function EditProfile() {
  const [open, setOpen] = React.useState(false)
  return (
    <div >
      <Button onClick={() => {setOpen(true);}}>Edit Profile</Button>

      <Modal 
        open={open}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
          <div className='header'>
            <IconButton onClick={() => {setOpen(false);}} ><CloseIcon/></IconButton>
            <h2 className='header-title'> Edit Profile</h2>
            <button className='save-btn'>Save</button>
          </div>
          <div className="backgroundImage"></div>
          <div className="profileTitle">
            <div className="profileImage">
              <Avatar src="" />
            </div>
          </div>
          <form className='fill-content'>
            <TextField className='text-field' fullWidth label="Name" id="fullWidth" variant='filled'/>
            <TextField className='text-field' fullWidth label="Bio" id="fullWidth" variant='filled'/>
            <TextField className='text-field' fullWidth label="Location" id="fullWidth" variant='filled'/>
            <TextField className='text-field' fullWidth label="Website" id="fullWidth" variant='filled'/>
          </form>
          <div className='birthdate-section'>
            <p>Birth Date</p>
            <p>.</p>
            <text>Edit</text>
          </div>
          <div className='last-section'>
            <h2>Add your date of birth</h2>
            <div className='last-btn'>
              <h2>Switch to professional </h2>
              <ChevronRightIcon/>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
