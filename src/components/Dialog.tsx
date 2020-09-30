import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type FormDialogProps = {
   open: boolean;
   editHandler: Function;
   index: number;
   closeDialog: Function;
};

export default function FormDialog({open, editHandler, index, closeDialog}: FormDialogProps) {
  const [name, setName] = React.useState('');
  const [cost, setCost] = React.useState(''); 

  function innerEditHandler() {
    editHandler(index, {
      name,
      cost
    });
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Новое значение:</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="Cost"
            type="number"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog()} color="primary">
            Cancel
          </Button>
          <Button onClick={innerEditHandler} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}