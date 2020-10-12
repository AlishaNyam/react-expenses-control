import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IBuying } from './Buying';
import { actions } from '../store/store';
import { useDispatch } from 'react-redux';

type FormDialogProps = {
   open: boolean;
   index: number;
   closeDialog: Function;
   buying: IBuying;
};

export default function FormDialog({open, index, closeDialog, buying}: FormDialogProps) {
  const [name, setName] = React.useState(buying.name);
  const [cost, setCost] = React.useState(buying.cost);
  const dispatch = useDispatch()

  function innerEditHandler() {
    dispatch(actions.edit({
      index, 
      newObject: {
        name,
        cost
      } 
    }))
    closeDialog();
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
            onChange={(event) => setCost(Number(event.target.value))}
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