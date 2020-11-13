import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormDialog from '../components/Dialog'
import { actions } from '../store/store';
import {useDispatch} from 'react-redux';
import { Checkbox } from '@material-ui/core';

export interface IBuying {
    name: string;
    cost: number;
    checked: boolean
}

type BuyingProps = {
    buying: IBuying;
    index: number;
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
}));


export const Buying = ({buying, index}: BuyingProps) => {
    const classes = useStyles();
    const [isDiaogOpen, setDialogOpen] = useState(false);
    const dispatch = useDispatch()

    function innerEditHandler(index: number, newValue: IBuying) {
        setDialogOpen(false);
        actions.edit({index, newValue});
    }

    function closeDialog() {
        setDialogOpen(false);
    }

    return <Card className={classes.root}>
        <CardContent>
            <Typography variant="h5" component="h2">
                {buying.name}
            </Typography>
            <Typography variant="body2" component="p">
                {buying.cost} р.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={e => dispatch(actions.delete(index))}>Delete</Button>
            <Button size="small" onClick={() => setDialogOpen(true)}>Edit</Button>
            <Checkbox color="primary" checked={buying.checked} onChange={() => dispatch(actions.toggleCheckbox(index))}/>
        </CardActions>
        <FormDialog open={isDiaogOpen} closeDialog={closeDialog} buying={buying} index={index}/>
    </Card>;
};
