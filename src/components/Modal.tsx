/* eslint-disable no-unused-vars */
import React, { ReactChild, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import { Todo } from '../types/todo';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
} as const;

export default function ModalComponent({
  children, onClick, submitForm, todo,
}: {
  children: ReactChild,
  onClick: () => void,
  submitForm: (id: string, event?: React.ChangeEvent<HTMLInputElement>) => void,
  todo: Todo
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => { setOpen(true); onClick(); };
  const handleClose = () => setOpen(false);

  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.which === 13) {
      submitForm(todo.id);
      handleClose();
    }
  };

  return (
    <div onKeyUp={handleEnterKey} aria-hidden="true">
      <IconButton onClick={handleOpen} aria-label="Edit">
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Edit Task:
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {children}
          </Typography>
          <Button onClick={() => { submitForm(todo.id); handleClose(); }}>save</Button>
          <Button onClick={() => { handleClose(); }}>cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
